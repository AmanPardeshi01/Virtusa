package com.security.jwt.JWT_security.service;


import com.security.jwt.JWT_security.entity.User;
import com.security.jwt.JWT_security.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.*;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Service;

import java.util.stream.Collectors;

@Service
public class CustomerUserDetailsService implements UserDetailsService {
    @Autowired private UserRepository userRepo;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User u = userRepo.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));
        var authorities = u.getRoles().stream()
                .map(role -> new SimpleGrantedAuthority(role.getRoleName()))
                .collect(Collectors.toSet());
        return new org.springframework.security.core.userdetails.User(
                u.getUsername(), u.getPassword(), u.isEnabled(),
                true, true, true, authorities);
    }
}
