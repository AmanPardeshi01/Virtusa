package com.example.practiceProject.repository;

import com.example.practiceProject.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface StudentRepository extends JpaRepository<Student, Long> {
//    List<Student> findByName(String name);

    @Query("select e from Student e where e.name = :name")
    List<Student> findByName(@Param("name") String name);
}



