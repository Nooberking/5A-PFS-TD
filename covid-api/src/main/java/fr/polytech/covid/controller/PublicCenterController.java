package fr.polytech.covid.controller;

import fr.polytech.covid.entity.Center;
import fr.polytech.covid.service.CenterService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/public")
public class PublicCenterController {
    private final CenterService centerService;

    public PublicCenterController(CenterService centerService) {
        this.centerService = centerService;
    }

    @GetMapping("/centers")
    public List<Center> getCenters(@RequestParam(required = false) String city){
        return centerService.getCenters(city);
    }

    @GetMapping("/center")
    public Center getCenter(@RequestParam int id){
        return centerService.getCenter(id);
    }
}
