package com.example.oAuth;//package com.security.jwt.JWT_security.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;

@Controller
public class HomeController {

    @GetMapping("/")
    public String index() {
        return "login"; // login.html
    }

    @GetMapping("/login")
    public String login() {
        return "login"; // same page
    }

    @GetMapping("/home")
    public String home(Model model, @AuthenticationPrincipal Object principal) {

        if (principal instanceof org.springframework.security.oauth2.core.user.OAuth2User oauthUser) {
            String name = oauthUser.getAttribute("name");
            String email = oauthUser.getAttribute("email");
            model.addAttribute("name", name);
            model.addAttribute("email", email);
            return "home";
        }

        if (principal instanceof UserDetails user) {
            model.addAttribute("name", user.getUsername());
            return "home";
        }

        model.addAttribute("name", "Guest");
        return "home";
    }

}
