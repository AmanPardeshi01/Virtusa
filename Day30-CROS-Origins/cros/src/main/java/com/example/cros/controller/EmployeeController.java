package com.example.cros.controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/employees")
public class EmployeeController {


    @GetMapping("/")
    public String index() {
        return "Home page";
    }

    @GetMapping("/home")
    public String home(){
        return "Welcome to Home!";
    }


    @GetMapping("/user")
    @PreAuthorize("hasRole('USER')")
    public String user(){
        return "Welcome user!";
    }

    @GetMapping("/admin")
    @PreAuthorize("hasRole('ADMIN')")
    public String admin(){
        return "Welcome Admin!";
    }
}
