package com.example.demo.Security;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/hello")
public class Dummycontroller {

  @GetMapping("/hi")
  public String getMethodName(@RequestParam String param) {
      return new String();
  }
  
}
