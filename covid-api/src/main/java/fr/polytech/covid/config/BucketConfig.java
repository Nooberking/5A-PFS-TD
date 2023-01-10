package fr.polytech.covid.config;


import fr.polytech.covid.config.interceptors.BucketHandlerInterceptor;
import fr.polytech.covid.config.utils.YAMLFilters;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;


@Configuration
public class BucketConfig implements WebMvcConfigurer {

    private final YAMLFilters filters  = new YAMLFilters(null);

    @Override
    public void addInterceptors(InterceptorRegistry registry){
        registry.addInterceptor(bucketHandlerInterceptor()).addPathPatterns(filters.getUrl("bucket_limited"));
    }

    @Bean
    public HandlerInterceptor bucketHandlerInterceptor() {
        return new BucketHandlerInterceptor();
    }
}
