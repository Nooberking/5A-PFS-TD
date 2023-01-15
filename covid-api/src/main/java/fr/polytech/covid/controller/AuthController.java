package fr.polytech.covid.controller;

import fr.polytech.covid.service.EmployeeService;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/admin")
public class AuthController {

    private final EmployeeService employeeService;

    public AuthController(EmployeeService employeeService){ this.employeeService = employeeService; }

    @PostMapping("/auth")
    public ResponseEntity<Object> getUserDetails(@RequestHeader(HttpHeaders.AUTHORIZATION) String authInfos){
      try {

          return ResponseEntity.ok().body(this.employeeService.loadEmployee(authInfos));
      }catch(Exception exception) {
            return new ResponseEntity<>("username ou password incorrect", HttpStatus.UNAUTHORIZED);
      }
    }
}
