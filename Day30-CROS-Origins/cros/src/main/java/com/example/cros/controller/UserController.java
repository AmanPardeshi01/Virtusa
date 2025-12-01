package com.example.cros.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping
public class UserController {

    @GetMapping("/login")
    public String login(){
        return "Login";
    }
}
