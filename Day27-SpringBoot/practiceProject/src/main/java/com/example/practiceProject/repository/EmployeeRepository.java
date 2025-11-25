package com.example.practiceProject.repository;

import com.example.practiceProject.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {

    List<Employee> findByName(String name);

    List<Employee> findByAgeGreaterThan(int age);

    List<Employee> findByNameAndEmail(String name, String email);

    List<Employee> findByAddressCity(String city);

    List<Employee> findByNameIgnoreCase(String name);

    List<Employee> findByAgeBetween(int min, int max);
}

