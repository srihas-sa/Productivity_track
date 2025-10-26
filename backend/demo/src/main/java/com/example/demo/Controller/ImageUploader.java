package com.example.demo.Controller;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")

class inputImageUploader {
  public ArrayList<byte[]> imageData;

}


public class ImageUploader {
  
  @GetMapping("/uploadImage")
  public String uploadImage(@RequestPart ImageUploader imageUploader) {
    ArrayList<byte[]> images = new ArrayList<>();
    images= imageUploader.imageData;


    for (byte[] imageData : imageUploader) {

      // Process each image data (e.g., save to database or file system)
      System.out.println("Received image of size: " + imageData.length + " bytes");
    }
    return "Image uploaded successfully!";
  }
}
