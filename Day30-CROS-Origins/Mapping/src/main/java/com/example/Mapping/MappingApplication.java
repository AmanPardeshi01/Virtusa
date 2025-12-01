package com.example.Mapping;

import com.example.Mapping.Models.Address;
import com.example.Mapping.Models.StudentInformation;
import com.example.Mapping.Repository.StudentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class MappingApplication implements CommandLineRunner {

    @Autowired
    private StudentRepo studentRepo;

    public static void main(String[] args) {
        SpringApplication.run(MappingApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {

        // create student
        StudentInformation student = new StudentInformation("Aayush");

        // create addresses
        Address address1 = new Address("Sonipat", student);
        Address address2 = new Address("Delhi", student);

        // link addresses to student
        student.getAddresses().add(address1);
        student.getAddresses().add(address2);

        // save student, addresses will be saved automatically due to cascade
        studentRepo.save(student);
    }
}
