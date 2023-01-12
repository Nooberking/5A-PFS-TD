package fr.polytech.covid.config;

import fr.polytech.covid.config.filters.CustomEtagFilter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.filter.ShallowEtagHeaderFilter;

@Configuration
public class EtagConfig {

    @Bean
    public ShallowEtagHeaderFilter shallowEtagHeaderFilter() { return new CustomEtagFilter(); }
}
