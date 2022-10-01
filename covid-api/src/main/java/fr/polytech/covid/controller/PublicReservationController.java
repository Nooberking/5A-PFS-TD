package fr.polytech.covid.controller;

import fr.polytech.covid.entity.Reservation;
import fr.polytech.covid.service.PatientService;
import fr.polytech.covid.service.ReservationService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("public")
public class PublicReservationController {
    private final ReservationService reservationService;
    private final PatientService patientService;

    public PublicReservationController(
            ReservationService reservationService,
            PatientService patientService) {
        this.reservationService = reservationService;
        this.patientService = patientService;
    }

    @GetMapping("/reservations")
    public List<Reservation> getReservations() { return reservationService.reservations();}

    @PostMapping("/reservation")
    public void addReservation(@RequestBody Reservation reservation){
        patientService.addPatient(reservation.getPatient());
        reservationService.addReservation(reservation);
    }

}
