package com.example.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.SecurityProperties.User;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Service.SaveuserDetail;

class loginrequest {
  public String email;
  public String password;
}

@RestController
// @CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api")
public class SignUp {
  @Autowired
  public SaveuserDetail service1;

  @PostMapping("/signup")
  public String saveUser(@RequestBody UserEntity entity) {
    UserEntity user = new UserEntity();
    user.setName(entity.getName());
    user.setPassword(entity.getPassword());
    user.setEmail(entity.getEmail());
    UserDetailsEntity details = new UserDetailsEntity();
    user.setUserDetails(details);
    if (service1.saveUser(user) != "User added successfully") {
      return "Error in adding user";
    } else {

      // service1.findId(user.getId());
      return "User added successfully";
    }
  }

  @PostMapping("/login")
  public UserEntity getUser(@RequestBody loginrequest request) {
    System.out.println(request.email);
    System.out.println(request.password);
    UserEntity user = new UserEntity();
    user = service1.findbyemial(request.email);
    System.out.println(user.getPassword());
    System.out.println(request.password);
    System.out.println(user.getUserDetails().getBlogDet());
    if (user == null) {
      return user;
    }

    if (user.getPassword().equals(request.password)) {
      return user;
    } else {
      return user;
    }

  }
}
