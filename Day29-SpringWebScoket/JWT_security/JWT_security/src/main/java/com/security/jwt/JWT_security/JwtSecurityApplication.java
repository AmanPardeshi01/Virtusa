package com.security.jwt.JWT_security;

import com.security.jwt.JWT_security.entity.User;
import com.security.jwt.JWT_security.repository.UserRepository;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@SpringBootApplication
public class JwtSecurityApplication {



    public static void main(String[] args) {

        SpringApplication.run(JwtSecurityApplication.class, args);
	}

}
