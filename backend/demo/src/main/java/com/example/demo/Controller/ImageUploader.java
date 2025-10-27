package com.example.demo.Controller;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.Repository.UserRepository;


class inputImageUploader {
  public ArrayList<byte[]> images;
  inputImageUploader(){
    this.images=images;
  }
}

@RestController
@RequestMapping("/api")
public class ImageUploader {

  
  @Autowired
  private UserRepository userRepository;
  
  @PostMapping("/uploadImage")
  public String uploadImage(@RequestParam("images") MultipartFile[] imageUploader,@AuthenticationPrincipal UserEntity user) {
    List<byte[]> imageList = new ArrayList<>();
    for (MultipartFile file : imageUploader) {
      try {
        byte[] imageData = file.getBytes();
        imageList.add(imageData);
      } catch (Exception e) {
        e.printStackTrace();
        return "Failed to upload images.";
      }
    }
    UserDetailsEntity userDetails = user.getUserDetails();
    userDetails.setGrommingImages(imageList);
    user.setUserDetails(userDetails);
    userRepository.save(user);
    return "Image uploaded successfully!";
  }
}
