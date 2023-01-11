package fr.polytech.covid.config;

import fr.polytech.covid.metrics.ReservationMetricsAspect;
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
    public ReservationMetricsAspect reservationMetricsAspect(){
        return new ReservationMetricsAspect(this.registry);
    }
}
