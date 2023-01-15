package fr.polytech.covid.config.interceptors;

import fr.polytech.covid.config.BucketConfig;
import io.github.bucket4j.ConsumptionProbe;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.mock.web.MockHttpServletRequest;
import org.springframework.mock.web.MockHttpServletResponse;
import org.springframework.test.context.event.annotation.AfterTestClass;
import org.springframework.test.context.event.annotation.BeforeTestClass;
import org.springframework.util.Assert;

import java.util.Objects;


@SpringBootTest
public class BucketHandlerInterceptorTest {


    private final BucketHandlerInterceptor bucketHandlerInterceptor;
    @MockBean
    private ConsumptionProbe mockProbe;

    private long tokensCountBeforeTest;

    @Autowired
    public BucketHandlerInterceptorTest(BucketConfig bucketConfig) {
        this.bucketHandlerInterceptor = (BucketHandlerInterceptor) bucketConfig.bucketHandlerInterceptor();
    }

    @BeforeTestClass
    public void setup(){
        tokensCountBeforeTest  = bucketHandlerInterceptor.bucket.getAvailableTokens();
        if(tokensCountBeforeTest == 0) bucketHandlerInterceptor.bucket.addTokens(1);
    }

    @Test
    public void givenBucketConsumed_ShouldReturnExpectedPreHandle() throws Exception {
        // Arrange
        MockHttpServletRequest mockRequest = new MockHttpServletRequest();
        MockHttpServletResponse mockResponse = new MockHttpServletResponse();
        Object mockHandler = Mockito.mock(Object.class);

        // Act
        boolean actualPreHandleWhenBucketNotEmpty = bucketHandlerInterceptor.preHandle(mockRequest, mockResponse, mockHandler);
        bucketHandlerInterceptor.bucket.tryConsumeAsMuchAsPossible();
        boolean actualPreHandleWhenEmpty = bucketHandlerInterceptor.preHandle(mockRequest, mockResponse, mockHandler);

        // Assert
        Assert.isTrue(actualPreHandleWhenBucketNotEmpty,
                "Not expected preHandle when the bucket is not empty.");
        Assert.isTrue(!actualPreHandleWhenEmpty,
                "Not expected preHandle when the bucket is empty.");
    }

    @Test
    public void givenBucketConsumption_ShouldAddExpectedRateRemainingHeaderOnResponse(){

        // Arrange
        MockHttpServletResponse mockResponse = new MockHttpServletResponse();

        long expectedRemainingToken = 9;

        Mockito.when(mockProbe.getRemainingTokens())
                .thenReturn(expectedRemainingToken);

        // Act
        bucketHandlerInterceptor.addRateRemainingHeader(mockResponse, mockProbe);

        // Assert
        Assert.isTrue(mockResponse.getStatus() == 200,
                "Unexpected response status. Has status : " + mockResponse.getStatus());

        Assert.isTrue(mockResponse.containsHeader("X-Rate-Limit-Remaining"),
                "Does not contain X-Rate-Limit-Remaining header in response.");

        Assert.isTrue(Objects.equals(mockResponse.getHeaderValue("X-Rate-Limit-Remaining"), "9"),
                "Not expected remaining token value on the X-Rate-Limit-Remaining header.");
    }

    @Test
    public void givenBucketEmptyInfos_ShouldAddExpectedRetryAfterHeaderOnResponse() throws Exception {

        // Arrange
        MockHttpServletResponse mockResponse = new MockHttpServletResponse();

        long expectedNanosToWaitForRefill = 60_000_000_000L;

        Mockito.when(mockProbe.getNanosToWaitForRefill())
                .thenReturn(expectedNanosToWaitForRefill);

        // Act
        bucketHandlerInterceptor.addRateRetryAfterHeader(mockResponse, mockProbe);

        // Assert
        Assert.isTrue(mockResponse.getStatus() == 429,
                "Unexpected response status. Has status : " + mockResponse.getStatus());

        Assert.isTrue(mockResponse.containsHeader("Rate-Limit-Retry-After-Seconds"),
                "Does not contain Rate-Limit-Retry-After-Seconds header in response.");

        Assert.isTrue(Objects.equals(mockResponse.getHeaderValue("Rate-Limit-Retry-After-Seconds"), "60"),
                "Not expected remaining token value on the Rate-Limit-Retry-After-Seconds header.");
    }

    @AfterTestClass
    public void resetBucket() {
        long actualTokensCount = bucketHandlerInterceptor.bucket.getAvailableTokens();

        if( tokensCountBeforeTest != actualTokensCount){
            resetBucketTokens(actualTokensCount);
        }
    }

    public void resetBucketTokens(long tokensCount){
        if( tokensCountBeforeTest < tokensCount)
            bucketHandlerInterceptor.bucket.tryConsume(tokensCount - tokensCountBeforeTest);
        else
            bucketHandlerInterceptor.bucket.addTokens(tokensCountBeforeTest - tokensCount);
    }
}
