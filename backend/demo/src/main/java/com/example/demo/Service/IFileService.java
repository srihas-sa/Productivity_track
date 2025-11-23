package com.example.demo.Service;

public interface IFileService {
  public String uploadImage(String path, org.springframework.web.multipart.MultipartFile file) throws java.io.IOException;
}
