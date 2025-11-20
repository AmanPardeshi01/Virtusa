package com.example.practiceProject.service;

import com.example.practiceProject.entity.Student;

import java.util.List;

public interface StudentService {
    Student saveStudent(Student student);

    List<Student> getAllStudents();

    Student getStudentById(Long id);

    Student updateStudent(Long id, Student student);

    String deleteStudent(Long id);

    List<Student> findByStudentName(String name);
}


