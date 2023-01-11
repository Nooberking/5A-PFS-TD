package fr.polytech.covid.metrics;

import io.micrometer.core.instrument.MeterRegistry;
import io.micrometer.core.instrument.Tag;
import io.micrometer.core.instrument.Timer;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.time.Duration;
import java.time.Instant;
import java.util.List;

@Component
@Aspect
public class ReservationMetricsAspect {

    private final MeterRegistry registry;

    @Autowired
    public ReservationMetricsAspect(MeterRegistry registry) {
        this.registry = registry;

    }

    @AfterReturning("execution(public * fr.polytech.covid.service.interfaces.ReservationService.addReservation(..))")
    public void successReservation(JoinPoint joinPoint){
        Tag tag = Tag.of("reservation-impl", joinPoint.getTarget().getClass().getSimpleName());
        registry.counter("reservation-done", List.of(tag)).increment();
    }

    @Around("execution(public * fr.polytech.covid.service.interfaces.ReservationService.addReservation(..))")
    public Object durationReservation(ProceedingJoinPoint joinPoint)
            throws Throwable {
        Tag tag = Tag.of("reservation-impl", joinPoint.getTarget().getClass().getSimpleName());
        Timer timer = registry.timer("reservation-duration", List.of(tag));
        Instant startTime = Instant.now();
        try {
            return joinPoint.proceed(joinPoint.getArgs());
        } finally {
            timer.record(Duration.between(startTime, Instant.now()));
        }
    }




}
