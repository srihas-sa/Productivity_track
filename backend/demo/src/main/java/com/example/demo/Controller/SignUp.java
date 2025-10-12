package com.example.demo.Controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.SecurityProperties.User;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Service.OnetoManyservi;
import com.example.demo.Service.SaveuserDetail;

import reactor.core.publisher.Sinks.One;

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

  @Autowired
  public OnetoManyservi service2;

  @Autowired
  private PasswordEncoder PasswordEncoder;

  @PostMapping("/signup")
  public String saveUser(@RequestBody UserEntity entity) {
    UserEntity user = new UserEntity();
    user.setName(entity.getName());
    user.setPassword(PasswordEncoder.encode(entity.getPassword()));
    user.setEmail(entity.getEmail());
    UserDetailsEntity details = new UserDetailsEntity();

    /* Practice code */
    OneToManyPare user1 = new OneToManyPare();
    user1.setName(entity.getName());
    user1.setEmail(entity.getEmail());
    user1.setPassword(entity.getPassword());
    ArrayList<OneToManyChild> details1 = new ArrayList<OneToManyChild>();
    OneToManyChild det1 = new OneToManyChild();
    det1.setBlogDet("This is my first blog"); // Example blog detail
    details1.add(det1);
    user1.setUserDetails(details1);
    service2.saveUser(user1);
    List<UserEntity> ll = service1.findbyname(user.getName());
    System.out.println("List size " + ll.size());
    System.out.println("List data " + ll);
    service2.findbyemial(user1.getEmail());

    service2.findbyblogCriteriaApi("first");
    service2.findbyblogSpecification("srihas");
    /* Practice code end */

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
      System.out.println("Password matched");
      return user;
    } else {
      return user;
    }

  }
}
