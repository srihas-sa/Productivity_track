package com.example.demo.Controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.SecurityProperties.User;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.EntityList.UserEntity;
import com.example.demo.Service.OnetoManyservi;
import com.example.demo.Service.SaveuserDetail;

import reactor.core.publisher.Sinks.One;

class Blog1 {
  public String Blogs;

  public Blog1(String Blogs) {
    this.Blogs = Blogs;
  };

  public String getBlogs() {
    return Blogs;
  }

  public void setBlogs(String Blogs) {
    this.Blogs = Blogs;
  }

}

class Ideas1 {
  public String ideas;

  public Ideas1(String ideas) {
    this.ideas = ideas;
  };

  public String getIdeas() {
    return ideas;
  }

  public void setIdeas(String ideas) {
    this.ideas = ideas;
  }

}

@RestController
// @CrossOrigin(origins = "http://localhost:3000")

@RequestMapping("/api")
public class IdeasBlogContr {
  @Autowired
  public SaveuserDetail service1;

  @Autowired
  public OnetoManyservi service2;

  @Autowired
  private PasswordEncoder PasswordEncoder;

  @PostMapping("/blog")
  @PreAuthorize("hasRole('USER')")
  public UserEntity getUser13(@AuthenticationPrincipal UserEntity user, @RequestBody Blog1 blogData) {
    System.out.println("blog called" + blogData.getBlogs());
    System.out.println("Authenticated user details: " + user.getUserDetails().getBlogDet());
    user.getUserDetails().setBlogDet(blogData.getBlogs());
    System.out.println(user.getUserDetails().getBlogDet());
    service1.saveUser(user);
    return user;
  }

  @PostMapping("/ideas")
  public UserEntity getUser12(@AuthenticationPrincipal UserEntity user, @RequestBody Ideas1 ideaData) {
    System.out.println("ideas called" + ideaData.getIdeas());
    System.out.println("Authenticated user: " + user.getEmail());
    System.out.println("Authenticated user details: " + user.getUserDetails().getBlogDet());
    user.getUserDetails().setIdeas(ideaData.getIdeas());
    System.out.println(user.getUserDetails().getIdeas());

    // user = service1.findbyemial(request.email);

    // System.out.println(user.getPassword());
    // System.out.println(request.password);
    // System.out.println(user.getUserDetails().getBlogDet());
    service1.saveUser(user);
    return user;

  }
}
