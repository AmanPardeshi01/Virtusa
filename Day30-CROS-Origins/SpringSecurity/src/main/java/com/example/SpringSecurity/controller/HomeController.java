package com.example.SpringSecurity.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

    @GetMapping("/")
    public String home() {
        return "Welcome! Please login.";
    }

    @GetMapping("/user/home")
    public String userHome() {
        return "User Home Page";
    }

    @GetMapping("/admin/home")
    public String adminHome() {
        return "Admin Home Page";
    }
}

