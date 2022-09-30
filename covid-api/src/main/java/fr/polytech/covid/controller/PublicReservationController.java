package fr.polytech.covid.controller;

import fr.polytech.covid.entity.Reservation;
import fr.polytech.covid.service.ReservationService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("public")
public class PublicReservationController {
    private final ReservationService reservationService;

    public PublicReservationController(
            ReservationService reservationService) {
        this.reservationService = reservationService;
    }

    @GetMapping("/reservations")
    public List<Reservation> getReservations() { return reservationService.reservations();}

    @PutMapping("/reservation")
    public void addReservation(@RequestBody Reservation reservation){
        reservationService.addReservation(reservation);
    }

}
