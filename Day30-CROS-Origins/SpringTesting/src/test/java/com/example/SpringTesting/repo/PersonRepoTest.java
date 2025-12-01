package com.example.SpringTesting.repo;

import com.example.SpringTesting.entity.Person;
import com.example.SpringTesting.repository.PersonRepo;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.test.context.ActiveProfiles;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.ANY) // Force H2 in-memory DB
@ActiveProfiles("test")
public class PersonRepoTest {

    @Autowired
    private PersonRepo personRepo;

    @Test
    void testExistsById() {
        // Insert test data
        Person person = new Person(null, "Test Name", "City");
        person = personRepo.save(person);

        // Verify that the saved person exists
        boolean exists = personRepo.existsById(person.getPersonId());
        assertThat(exists).isTrue();
    }

    @Test
    void testFindAllPersons() {
        // Insert multiple test data
        Person p1 = new Person(null, "Alice", "Delhi");
        Person p2 = new Person(null, "Bob", "Mumbai");
        personRepo.save(p1);
        personRepo.save(p2);

        // Verify retrieval
        var persons = personRepo.findAll();
        assertThat(persons).isNotEmpty();
        assertThat(persons.size()).isEqualTo(2);
    }
}
