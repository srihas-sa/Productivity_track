package com.example.demo.Controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

class UserDetailsController {
  String username;
  String password;

}

@RestController
// @CrossOrigin(origins = "http://10.131.168.126:3000") // Allow React to access
// it
// @RequestMapping("/api")
public class NewController {

  @PostMapping("/login")
  public String sayHello(@RequestBody String userDetails) {
    System.out.println("Hello from the backend!");
    if (userDetails.equals("admin")) {
      return "Login successful!";
    } else {
      return "Invalid credentials!";
    }
  }
}
