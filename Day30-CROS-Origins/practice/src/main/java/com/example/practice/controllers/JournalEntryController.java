package com.example.practice.controllers;

import com.example.practice.entity.JournalEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/journal")
public class JournalEntryController {

    public Map<Long, JournalEntity> journalEntries = new HashMap<>();

    @GetMapping("/getAll")
    public List<JournalEntity> getAll(){
        return new ArrayList<>(journalEntries.values());
    }

    @PostMapping("/create")
    public boolean createJournal(@RequestBody JournalEntity myEntity){
        journalEntries.put(myEntity.getId(),myEntity);
        return true;
    }

    @GetMapping("id/{myId}")
    public JournalEntity getJournalEntityById(@PathVariable Long myId){
        return  journalEntries.get(myId);
    }


    @DeleteMapping("id/{myId}")
    public JournalEntity deleteJournalEntityById(@PathVariable Long myId){
        return journalEntries.remove(myId);
    }

    @PutMapping("/id/{id}")
    public JournalEntity updateJournalById(@PathVariable Long id, @RequestBody JournalEntity myEntity){
        return journalEntries.put(id, myEntity);
    }

}
