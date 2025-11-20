package com.example.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class HomeController {

    @RequestMapping("/home")
    public ModelAndView home() {
        ModelAndView mav = new ModelAndView();
        mav.setViewName("home"); // resolves to /WEB-INF/views/home.jsp
        mav.addObject("message", "Welcome to Spring MVC!");
        return mav;
    }

    @RequestMapping("/")
    public ModelAndView index() {
        ModelAndView mav = new ModelAndView();
        mav.setViewName("index");
        return mav;
    }
}
