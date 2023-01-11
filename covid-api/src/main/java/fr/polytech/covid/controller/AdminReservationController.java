package fr.polytech.covid.controller;

import fr.polytech.covid.entity.Center;
import fr.polytech.covid.entity.Reservation;
import fr.polytech.covid.service.ReservationServiceImpl;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/admin")
public class AdminReservationController {
    private final ReservationServiceImpl reservationServiceImpl;

    public AdminReservationController(ReservationServiceImpl reservationServiceImpl) {
        this.reservationServiceImpl = reservationServiceImpl;
    }

    @GetMapping("/reservations")
    public List<Reservation> getReservations(){
        return reservationServiceImpl.reservations();
    }

    @GetMapping("/reservationsByCenter")
    public List<Reservation> getReservationsByCenter(@RequestBody Center center) {
        return reservationServiceImpl.reservations(center);
    }

    @GetMapping("/reservation")
    public Reservation getReservationOfPatient(@RequestParam int patient_id){
        return reservationServiceImpl.getReservationOfPatient(patient_id);
    }

    @DeleteMapping("/reservation")
    public void deleteReservation(@RequestBody Reservation reservation){
        reservationServiceImpl.deleteReservation(reservation);
    }


}
