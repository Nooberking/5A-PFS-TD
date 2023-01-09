package fr.polytech.covid.service;

import fr.polytech.covid.entity.Reservation;
import fr.polytech.covid.repository.PatientRepository;
import fr.polytech.covid.repository.ReservationRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.util.Assert;

import java.util.Optional;

import static org.mockito.ArgumentMatchers.anyInt;
import static org.mockito.Mockito.*;

public class ReservationServiceTest {

    @Mock
    private ReservationRepository reservationRepository;

    @Mock
    private PatientRepository patientRepository;

    @InjectMocks
    private ReservationService reservationService;

    @BeforeEach
    public void setUp(){
        MockitoAnnotations.openMocks(this);
    }
    @Test
    public void whenPatientDoesNotExist_ShouldReturnNullReservation(){
        // Arrange
        when(patientRepository.findById(anyInt())).thenReturn(Optional.empty());

        // Act
        Reservation resultReservation = reservationService.getReservationOfPatient(193938);

        // Test
        verify(patientRepository, times(1)).findById(anyInt());
        Assert.isTrue(resultReservation == null,
                "Not empty resultReservation");
    }
}
