package com.example.SpringTesting.service;



import java.util.List;

import com.example.SpringTesting.entity.Person;
import com.example.SpringTesting.repository.PersonRepo;
import org.springframework.stereotype.Service;
@Service
public class PersonService {
    //No need to use @Autowired when using Constructor Injection Dependencies are final

    private final PersonRepo repo;
    public PersonService(PersonRepo repo)
    {
        // this keyword refers to current instance
        this.repo = repo;
    }

    public List<Person> getAllPerson()
    {
        return repo.findAll();
    }
}