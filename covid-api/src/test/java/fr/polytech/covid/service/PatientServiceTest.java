package fr.polytech.covid.service;

import fr.polytech.covid.entity.Patient;
import fr.polytech.covid.repository.PatientRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.util.Assert;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

public class PatientServiceTest {

    @Mock
    private PatientRepository patientRepository;

    @Mock
    private Patient mockPatient;

    @InjectMocks
    private PatientService patientService;

    @BeforeEach
    public void setUp(){
        MockitoAnnotations.openMocks(this);

        mockPatient = new Patient();
        mockPatient.setFirstName("test");
        mockPatient.setLastName("test");
        Assert.isTrue(!mockPatient.isVaccinated(),
                "Not expected mockPatient initialisation.");
    }

    @Test
    public void givenPatient_ShouldSaveVaccinatedPatient(){
        // Arrange
        when(patientRepository.save(any())).thenReturn(null);

        // Act
        patientService.confirmVaccination(mockPatient);

        // Assert
        verify(patientRepository, times(1)).save(any());
        Assert.isTrue(mockPatient.isVaccinated(),
                "Patient vaccination not registered.");
    }
}
