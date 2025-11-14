package com.example.demo.Controller;

import javax.resource.spi.AuthenticationMechanism;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.UserDetailsEntity;
import com.example.demo.Entity.UserEntity;

@RestController
@RequestMapping("/api")
public class GetUserDetails {
  @GetMapping("/user/ideas")
  public String getUserIdeas(@AuthenticationPrincipal UserEntity user, UserDetailsEntity userDetails) {
      userDetails = user.getUserDetails();
      if(userDetails.getIdeas() == null){
        return "No ideas found.";
      }
      return userDetails.getIdeas();
    //String ideas = userDetails.getIdeas();
    // Return or process the ideas as needed
    
  }
}
