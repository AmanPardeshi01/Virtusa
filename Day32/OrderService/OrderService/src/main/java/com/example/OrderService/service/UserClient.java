package com.example.OrderService.service;

import com.example.OrderService.entity.UserResponse;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "UserService", url = "http://localhost:8081")
public interface UserClient {

    @GetMapping("/users/{id}")
    UserResponse getUserBYID(@PathVariable("id") Long id);
}
