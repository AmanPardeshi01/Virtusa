package com.example.practiceProject.service;

import com.example.practiceProject.entity.Employee;
import com.example.practiceProject.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository repo;

    public List<Employee> findByName(String name) {
        return repo.findByName(name);
    }

    public Employee save(Employee e) {
        return repo.save(e);
    }

    public List<Employee> findByAgeGreaterThan(int age) {
        return repo.findByAgeGreaterThan(age);
    }

    public List<Employee> findByNameAndEmail(String name, String email) {
        return repo.findByNameAndEmail(name, email);
    }

    public List<Employee> findByAddressCity(String city) {
        return repo.findByAddressCity(city);
    }

    public List<Employee> findByNameIgnoreCase(String name) {
        return repo.findByNameIgnoreCase(name);
    }

    public List<Employee> findByAgeBetween(int min, int max) {
        return repo.findByAgeBetween(min, max);
    }
}
