package com.example.practiceProject.service;

import com.example.practiceProject.entity.Student;
import com.example.practiceProject.repository.StudentRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentServiceImpl implements StudentService {

    private final StudentRepository repo;

    public StudentServiceImpl(StudentRepository repo){
        this.repo = repo;
    }

    @Override
    public Student saveStudent(Student student) {
        return repo.save(student);
    }

    @Override
    public List<Student> getAllStudents() {
        return repo.findAll();
    }

    @Override
    public Student getStudentById(Long id) {
        return repo.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Student Not Found with ID: "+ id));
    }

    @Override
    public Student updateStudent(Long id, Student student) {
        Student existing = getStudentById(id);

        existing.setName(student.getName());
        existing.setEmail((student.getEmail()));
        existing.setAge(student.getAge());
        return repo.save(existing);
    }


    @Override
    public List<Student> findByStudentName(String name) {
        return repo.findByName(name);
    }

    @Override
    public String deleteStudent(Long id) {
        repo.deleteById(id);
        return  "Student deleted successfully";
    }
}
