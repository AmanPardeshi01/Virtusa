package com.example.SpringTesting.repository;



import com.example.SpringTesting.entity.Person;
import org.springframework.data.jpa.repository.JpaRepository;

// Interface Extends JpaRepository
public interface PersonRepo extends JpaRepository<Person, Integer> {
    //Spring data jpa  will automatically provide implementation for it when using existsBy{fieldName}
    boolean existsById(Integer id);
}