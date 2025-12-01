package com.security.jwt.JWT_security.controller;



import com.security.jwt.JWT_security.dto.*;
import com.security.jwt.JWT_security.entity.*;
import com.security.jwt.JWT_security.repository.*;
import com.security.jwt.JWT_security.jwt.JwtUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.*;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthenticationManager authenticationManager;
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtils jwtUtils;

    public AuthController(AuthenticationManager authenticationManager,
                          UserRepository userRepository,
                          RoleRepository roleRepository,
                          PasswordEncoder passwordEncoder,
                          JwtUtils jwtUtils) {
        this.authenticationManager = authenticationManager;
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtUtils = jwtUtils;
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterRequest req) {
        if (userRepository.existsByUsername(req.username())) {
            return ResponseEntity.badRequest().body(Map.of("error", "Username already taken"));
        }

        User u = new User();
        u.setUsername(req.username());
        u.setPassword(passwordEncoder.encode(req.password()));
        u.setEnabled(true);

        Role role = roleRepository.findByRoleName("ROLE_USER")
                .orElseGet(() -> roleRepository.save(new Role("ROLE_USER")));
        u.setRoles(Set.of(role));

        userRepository.save(u);
        return ResponseEntity.ok(Map.of("message", "User registered"));
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AuthRequest req) {
        try {
            Authentication auth = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(req.username(), req.password())
            );
            // if no exception, authentication successful
            String token = jwtUtils.generateToken(req.username());
            return ResponseEntity.ok(new AuthResponse(token, "Bearer"));
        } catch (BadCredentialsException ex) {
            return ResponseEntity.status(401).body(Map.of("error", "Invalid credentials"));
        }
    }

    @GetMapping("/protected-data")
    public ResponseEntity<String> getProtectedData(@RequestHeader(value = "Authorization", required = false) String token) {

        if (token != null && token.startsWith("Bearer ")) {
            String jwtToken = token.substring(7); // remove "Bearer " prefix

            try {
                if (jwtUtils.validateToken(jwtToken)) {
                    String username = jwtUtils.getUsernameFromToken(jwtToken);
                   // Set<String> roles = jwtUtils.get(jwtToken);

                    //if (roles.contains("ROLE_ADMIN")) {
                        return ResponseEntity.ok("Protected data for admin: hello " + username);
                    //} else {
                      //  return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Insufficient role");
                    //}
                } else {
                    return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid token");
                }
            } catch (Exception ex) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Token parsing error: " + ex.getMessage());
            }
        }

        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Missing or invalid Authorization header");
    }
}


