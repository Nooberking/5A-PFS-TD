package fr.polytech.covid.service;

import fr.polytech.covid.entity.Center;
import fr.polytech.covid.entity.Patient;
import fr.polytech.covid.entity.Reservation;
import fr.polytech.covid.repository.CenterRepository;
import fr.polytech.covid.repository.PatientRepository;
import fr.polytech.covid.repository.ReservationRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ReservationService {

    private final ReservationRepository reservationRepository;
    private final CenterRepository centerRepository;
    private final PatientRepository patientRepository;

    public ReservationService(ReservationRepository reservationRepository, CenterRepository centerRepository, PatientRepository patientRepository) {
        this.reservationRepository = reservationRepository;
        this.centerRepository = centerRepository;
        this.patientRepository = patientRepository;
    }

    public Reservation getReservation(int id){
        return reservationRepository.findById(id).orElse(null);
    }
    public Reservation getReservationOfPatient(int patient_id){
        Patient patient = patientRepository.findById(patient_id).orElse(null);
        if(patient != null) return getReservationOfPatient(patient);
        else return null;
    }
    public Reservation getReservationOfPatient(Patient patient){
        return reservationRepository.findByPatient(patient);
    }

    public List<Reservation> reservations() {
        List<Reservation> reservations = new ArrayList<>();
        reservationRepository.findAll().forEach(reservations::add);
        return reservations;
    }

    public List<Reservation> reservations(int center_id){
        Center center = centerRepository.findById(center_id).orElse(null);
        if(center != null) return reservations(center);
        else return null;
    }
    public List<Reservation> reservations(Center center){
        return new ArrayList<>(reservationRepository.findByCenter(center));
    }

    public void deleteReservation(Reservation reservation){
        reservationRepository.delete(reservation);
    }

    public void deleteReservation(int id){
        reservationRepository.deleteById(id);
    }

}
