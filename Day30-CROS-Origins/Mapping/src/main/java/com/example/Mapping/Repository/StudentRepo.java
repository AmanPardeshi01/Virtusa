    package com.example.Mapping.Repository;

    import com.example.Mapping.Models.StudentInformation;
    import org.springframework.data.jpa.repository.JpaRepository;

    public interface StudentRepo extends JpaRepository<StudentInformation, Integer> {
    }