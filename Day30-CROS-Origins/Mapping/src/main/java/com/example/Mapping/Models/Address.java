package com.example.Mapping.Models;

import jakarta.persistence.*;

@Entity
@Table(name = "Address")
public class Address {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String cityname;

    @ManyToOne
    @JoinColumn(name = "Student_id") // foreign key column
    private StudentInformation student;

    public Address() {}

    public Address(String cityname, StudentInformation student) {
        this.cityname = cityname;
        this.student = student;
    }

    // getters and setters
    public int getId() {
        return id;
    }

    public String getCityname() {
        return cityname;
    }

    public void setCityname(String cityname) {
        this.cityname = cityname;
    }

    public StudentInformation getStudent() {
        return student;
    }

    public void setStudent(StudentInformation student) {
        this.student = student;
    }
}
