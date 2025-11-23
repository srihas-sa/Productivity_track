package com.example.demo.Service;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.UUID;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;


@Service
public class FileServiceImpl implements IFileService {

  @Override
  public String uploadImage(String path, MultipartFile file) throws IOException {
    //String originalFilename=file.getOriginalFilename();
    File folder=new File(path);
    if(!folder.exists()){
      folder.mkdirs();
    }
    System.out.println("File is Uploading.....1 "+folder.getPath());
    String fileName=UUID.randomUUID().toString()+"_"+file.getOriginalFilename().substring(file.getOriginalFilename().lastIndexOf("."));
        System.out.println("File is Uploading.....1 fileName:"+fileName);

    String filePath=path+File.separator+fileName;
        System.out.println("File is Uploading.....1 filepath:"+filePath);

    Files.copy(file.getInputStream(),Paths.get(filePath));
        System.out.println("File copy done");

    return filePath;
  }
  
}
