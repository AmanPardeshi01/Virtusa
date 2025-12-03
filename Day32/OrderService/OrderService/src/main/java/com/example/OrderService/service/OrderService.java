package com.example.OrderService.service;

import com.example.OrderService.entity.UserResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.client.circuitbreaker.CircuitBreaker;
import org.springframework.cloud.client.circuitbreaker.CircuitBreakerFactory;
import org.springframework.stereotype.Service;

@Service
public class OrderService {

    @Autowired
    private UserClient userClient;

    @Autowired
    private CircuitBreakerFactory circuitBreakerFactory;

    public String placeOrder(Long userId){

        CircuitBreaker breaker = circuitBreakerFactory.create("userCB");

        return breaker.run(
                () -> {
                    UserResponse user = userClient.getUserBYID(userId);
                    return "Order placed for: " + user.getName();
                },
                throwable -> fallbackOrder(userId, throwable)
        );
    }

    public String fallbackOrder(Long userId, Throwable t){
        return "User Service is down! Cannot place order for userId: " + userId;
    }
}
