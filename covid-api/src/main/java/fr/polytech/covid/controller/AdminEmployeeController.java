package fr.polytech.covid.controller;

import fr.polytech.covid.entity.Center;
import fr.polytech.covid.entity.Employee;
import fr.polytech.covid.service.EmployeeService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController

@RequestMapping("api/admin")

public class AdminEmployeeController {

    private final EmployeeService employeeService;

    public AdminEmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @GetMapping("/employees")
    public List<Employee> getEmployees(){ return this.employeeService.getEmployees(); }

    @GetMapping("/administrators")
    public List<Employee> getAdministrators(){ return this.employeeService.getAdministrators(); }

    @GetMapping("/doctors")
    public List<Employee> getDoctorsByCenter(@RequestBody Center center){
        return  this.employeeService.getDoctorsByCenter(center);
    }

    @PostMapping("/employee")
    public void setEmployee(@RequestBody Employee employee) {
        this.employeeService.createEmployee(employee);
    }

    @PostMapping("/doctor")
    public void setDoctor(@RequestBody Employee doctor){
        this.employeeService.createEmployee(doctor);
    }

    @PutMapping("/employee")
    public void updateEmployee(@RequestBody Employee employee){
        this.employeeService.updateEmployee(employee);
    }

    @PutMapping("/doctor")
    public void updateDoctor(@RequestBody Employee doctor){
        this.employeeService.updateEmployee(doctor);
    }

    @DeleteMapping("/employee")
    public void deleteEmployee(@RequestBody Employee employee){
        this.employeeService.deleteEmployee(employee);
    }
}
