package fr.polytech.covid.config;


import io.github.bucket4j.Bandwidth;
import io.github.bucket4j.Bucket;
import io.github.bucket4j.ConsumptionProbe;
import io.github.bucket4j.Refill;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.lang.NonNull;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.time.Duration;

@Configuration
public class BucketConfig implements HandlerInterceptor, WebMvcConfigurer    {
    private final Refill refill = Refill.intervally(10, Duration.ofMinutes(1));
    private final Bandwidth limit = Bandwidth.classic(10, refill);
    protected final Bucket bucket = Bucket.builder().addLimit(limit).build();

    private final YAMLFilters filters  = new YAMLFilters(null);

    @Override
    public boolean preHandle(@NonNull HttpServletRequest request,
                             @NonNull HttpServletResponse response,@NonNull Object handler)
    throws Exception{
        ConsumptionProbe probe = this.bucket.tryConsumeAndReturnRemaining(1);
        if(probe.isConsumed()){
            addRateRemainingHeader(response, probe);
            return true;
        } else
        {
           addRateRetryAfterHeader(response, probe);
            return false;
        }

    }
    public void addRateRemainingHeader(HttpServletResponse response,
                                       ConsumptionProbe probe){
        response.addHeader("X-Rate-Limit-Remaining",
                String.valueOf(probe.getRemainingTokens()));
    }
    public void addRateRetryAfterHeader  (HttpServletResponse response,
                                        ConsumptionProbe probe)
            throws Exception{
        long waitForRefill = probe.getNanosToWaitForRefill() / 1_000_000_000 ;
        response.addHeader("Rate-Limit-Retry-After-Seconds",
                String.valueOf(waitForRefill));
        response.sendError(HttpStatus.TOO_MANY_REQUESTS.value(),
                "You have exhausted your API Request Quota");
    }

    @Override
    public void addInterceptors(InterceptorRegistry registry){
        registry.addInterceptor(this).addPathPatterns(filters.getUrl("bucket_limited"));
    }

}
