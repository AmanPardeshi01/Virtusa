package com.example.OrderService.controller;

import com.example.OrderService.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/orders")
public class OrderController {

   @Autowired
   private OrderService orderService;

    @GetMapping("/place/{userId}")
    public String placeOrder(@PathVariable Long userId){
        return orderService.placeOrder(userId);
    }

}
