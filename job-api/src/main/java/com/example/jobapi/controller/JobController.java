package com.example.jobapi.controller;

import com.example.jobapi.exception.JobNotFoundException;
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

    @PostMapping("/add")
    public Job createJob(@Valid @RequestBody Job job) {
        return jobRepository.save(job);
    }

    @GetMapping("/job/{id}")
    public Job getJobById (@PathVariable(value = "id") Long jobId){
        return jobRepository.findById(jobId).orElseThrow(() -> new JobNotFoundException("Job", "id", jobId));
    }
    //PUT needs all columns to insert data
    @PutMapping("/edit/{id}")
    public Job updateJob(@PathVariable(value = "id") Long jobId,
                           @Valid @RequestBody Job jobDetails) {

        jobRepository.findById(jobId).orElseThrow(() -> new JobNotFoundException("Job", "id", jobId));

        jobDetails.setId(jobId);
        Job updateJob = jobRepository.save(jobDetails);
        return updateJob;
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteJob(@PathVariable(value = "id") Long jobId) {
        Job job = jobRepository.findById(jobId).orElseThrow(() -> new JobNotFoundException("Job", "id", jobId));

        jobRepository.delete(job);
        return ResponseEntity.ok().build();
    }

}
