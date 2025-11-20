package com.example.practiceProject.controller;


import com.example.practiceProject.entity.Student;
import com.example.practiceProject.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/student")
@CrossOrigin(origins = "*")
public class StudentController {

    private final StudentService service;

    public StudentController(StudentService service) {
        this.service = service;
    }


    //Create
    @PostMapping
    public Student saveStudent(@RequestBody Student student) {
        return  service.saveStudent(student);
    }

    @GetMapping
    public List<Student> getAllStudents() {
        return service.getAllStudents();
    }

    @GetMapping("/{id}")
    public Student getStudent(@PathVariable Long id) {
        return service.getStudentById(id);
    }

    @GetMapping("/getstudent/{name}")
    public List<Student> getByName(@PathVariable String name) {
        return service.findByStudentName(name);
    }





    //Update
    @PutMapping("/{id}")
    public Student updateStudent(@PathVariable Long id, @RequestBody Student student){
        return service.updateStudent(id, student);
    }

    //Delete
    @DeleteMapping("/{id}")
    public String deleteStudent(@PathVariable Long id){
        return service.deleteStudent(id);
    }
}
