package com.example.CROS2;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class Cors2Application {

    // Allow requests from frontend running on localhost:8080
    @CrossOrigin(origins = "http://localhost:8080")
    @GetMapping("/access")
    public String greeting() {
        return "Welcome to our Portal";
    }

    public static void main(String[] args) {
        SpringApplication.run(Cors2Application.class, args);
    }
}