package fr.polytech.covid.config;

import io.micrometer.core.aop.TimedAspect;
import io.micrometer.core.instrument.MeterRegistry;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class MetricsConfig {

    private final MeterRegistry registry;

    @Autowired
    public MetricsConfig(MeterRegistry registry){ this.registry = registry; }

    @Bean
    public TimedAspect timedAspect() {
        return new TimedAspect(this.registry);
    }
}
