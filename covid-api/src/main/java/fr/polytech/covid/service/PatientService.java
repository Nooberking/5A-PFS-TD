package fr.polytech.covid.service;

import fr.polytech.covid.entity.Patient;
import fr.polytech.covid.repository.PatientRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PatientService {
    private final PatientRepository patientRepository;

    public PatientService(PatientRepository patientRepository) {
        this.patientRepository = patientRepository;
    }

   public List<Patient> getPatients() {
        List<Patient> patients = new ArrayList<>();
        patientRepository.findAll().forEach(patients::add);
        return  patients;
   }

   public List<Patient>getPatients( String lastName){
       return new ArrayList<>(patientRepository.findByLastNameContainsIgnoreCase(lastName));
   }

   public void confirmVaccination(int id){
       patientRepository.findById(id).ifPresent(this::confirmVaccination);
   }
   public void confirmVaccination(Patient patient){
        patient.setVaccinated(true);
        patientRepository.save(patient);
   }
}
