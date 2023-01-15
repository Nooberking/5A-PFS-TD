package fr.polytech.covid.controller;

import fr.polytech.covid.entity.Reservation;
import fr.polytech.covid.service.PatientService;

import fr.polytech.covid.service.ReservationServiceImpl;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.Duration;


@RestController
@RequestMapping("api/public")
public class PublicReservationController {



    private final ReservationServiceImpl reservationServiceImpl;

    private final PatientService patientService;

    public PublicReservationController(
            ReservationServiceImpl reservationServiceImpl,
            PatientService patientService) {
        this.reservationServiceImpl = reservationServiceImpl;
        this.patientService = patientService;

    }


    @PostMapping("/reservation")
    public ResponseEntity<String> addReservation(@RequestBody Reservation reservation){
        patientService.addPatient(reservation.getPatient());
        reservationServiceImpl.addReservation(reservation);
        return ResponseEntity.ok().build();
    }

}
