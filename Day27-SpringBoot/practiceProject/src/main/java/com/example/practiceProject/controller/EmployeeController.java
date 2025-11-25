package com.example.practiceProject.controller;

import com.example.practiceProject.entity.Employee;
import com.example.practiceProject.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employees")
public class EmployeeController {

    @Autowired
    private EmployeeService service;

    @GetMapping("/by-name")
    public List<Employee> getByName(@RequestParam String name) {
        return service.findByName(name);
    }

    @PostMapping
    public Employee addEmployee(@RequestBody Employee employee) {
        return service.save(employee);
    }



    @GetMapping("/age-greater")
    public List<Employee> getByAgeGreater(@RequestParam int age) {
        return service.findByAgeGreaterThan(age);
    }

    @GetMapping("/by-name-email")
    public List<Employee> getByNameAndEmail(@RequestParam String name,
                                            @RequestParam String email) {
        return service.findByNameAndEmail(name, email);
    }

    @GetMapping("/by-city")
    public List<Employee> getByCity(@RequestParam String city) {
        return service.findByAddressCity(city);
    }

    @GetMapping("/by-name-ignorecase")
    public List<Employee> getByNameIgnoreCase(@RequestParam String name) {
        return service.findByNameIgnoreCase(name);
    }

    @GetMapping("/age-between")
    public List<Employee> getByAgeBetween(@RequestParam int min,
                                          @RequestParam int max) {
        return service.findByAgeBetween(min, max);
    }
}
