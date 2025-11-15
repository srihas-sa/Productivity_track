package com.example.demo.Controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.EntityList.CategoryEntity;
import com.example.demo.Interface.ICategoryService;
import com.example.demo.Service.ProCategoryService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
@RequestMapping("/api/testing")
public class CategoryController {

  public List<CategoryEntity> categories;

  @Autowired
  public ProCategoryService catgoryservicce;

  @GetMapping("/get-categories")
  public ResponseEntity getCategoryList() {
    List<CategoryEntity> ll= catgoryservicce.getAllCategory();
    if(ll==null){
        new ResponseEntity<>("Error In Creation ", HttpStatus.NOT_FOUND);
      }
      return new ResponseEntity<>(ll,HttpStatus.FOUND);
     
  }

  @PostMapping("/addCategory")
  public ResponseEntity AddCategory(@RequestBody String entity) {
      //TODO: process POST request
      CategoryEntity ca= new CategoryEntity();
      ca.setName(entity);
      String response=catgoryservicce.addCategory(ca);

      if(response!="Success"){
        new ResponseEntity<>("Error In Creation ", HttpStatus.NOT_FOUND);
      }
      return new ResponseEntity<>("Success",HttpStatus.FOUND);
  }
  

  @PostMapping("/removeCategory")
  public ResponseEntity deleteCategory(@RequestBody String entity) {
      //TODO: process POST request
      CategoryEntity ca= new CategoryEntity();
      ca.setName(entity);
      String response=catgoryservicce.removeCategory(ca);
      if(response!="Success"){
        new ResponseEntity<>("Error In Creation ", HttpStatus.NOT_FOUND);
      }
      return new ResponseEntity<>("Success",HttpStatus.FOUND);
  }
  
}
