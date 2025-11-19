package com.example.demo.MyController;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/product/mapping/")
public class MyController {
//
//    @GetMapping("/get")
//    public String getMessage(){
//        return "Hello Postman";
//    }

    @RequestMapping(value = "/get", method = RequestMethod.GET)
    public String getMessage1(){
        return "Hello Postman";
    }

    @GetMapping("/showall")
    public String getAllMessage(){
        return "Hello All";
    }
}
