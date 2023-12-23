package com.laios.demo.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api")
@RestController
public class DemoController {

    @GetMapping("/get")
    public ResponseEntity<String> get(){
        return ResponseEntity.ok("get response");
    }

    @PostMapping("/post")
    public ResponseEntity<String> post(){
        return ResponseEntity.ok("post response");
    }


    @GetMapping("/200")
    public ResponseEntity<String> demo200(){
        return ResponseEntity.ok("status = 200");
    }

    @GetMapping("/404")
    public ResponseEntity<String> demo4040(){
        return ResponseEntity.status(404).body("the value is 404");
    }
    @GetMapping("/500")
    public ResponseEntity<String> demo500(){
        return ResponseEntity.status(500).body("the value is 500");
    }
    @GetMapping("/503")
    public ResponseEntity<String> demo503(){
        return ResponseEntity.status(503).body("the value is 503");
    }

}
