package com.example.USER_SERVICE.controller;


import org.springframework.web.bind.annotation.RestController;

import com.example.USER_SERVICE.entity.UserResponse;

@RestController
@RequestMapping("/users")
public class UserController {

    @GetMapping("{id}")
    public UserResponse getUser(@PathVariable Long id){
        UserResponse user = new UserResponse();
        user.setId(id);
        user.setName("Johnny");
        user.setEmail("johnny@test.com");
        return user;
    }
}
