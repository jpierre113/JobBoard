package com.example.jobapi.controller;

import com.example.jobapi.model.Job;
import com.example.jobapi.repository.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/job")
public class JobController {

    @Autowired
    JobRepository jobRepository;

    @GetMapping("/")
    public String HelloWorld(){
        return "Hello World";
    }

    @GetMapping("/list")
    public List<Job> getAllJobs() {
        return jobRepository.findAll();
    }

    @GetMapping("/job/{id}")
    public Optional<Job> getJobById(@PathVariable(value = "id") Long jobId) {
        return jobRepository.findById(jobId);
    }

    @PutMapping("/job/{id}")
    public Job updatejob(@PathVariable(value = "id") Long jobId,
                           @Valid @RequestBody Job jobDetails) {
        jobDetails.setId(jobId);
        Job updateJob = jobRepository.save(jobDetails);
        return updateJob;
    }

    @DeleteMapping("/job/{id}")
    public ResponseEntity<?> deleteJob(@PathVariable(value = "id") Long jobId) {
        Optional<Job> job = jobRepository.findById(jobId);

        jobRepository.delete(job);
        return ResponseEntity.ok().build();
    }
}
