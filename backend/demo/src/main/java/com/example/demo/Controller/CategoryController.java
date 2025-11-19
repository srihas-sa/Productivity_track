package com.example.demo.Controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.EntityList.CategoryEntity;
import com.example.demo.Exception.ResourceNotFound21;
import com.example.demo.Interface.ICategoryService;
import com.example.demo.Service.ProCategoryService;

import jakarta.validation.Valid;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
@RequestMapping("/api/testing")
public class CategoryController {

  public List<CategoryEntity> categories;

  @Autowired
  public ProCategoryService catgoryservicce;

  public ResourceNotFound21 re;

  @GetMapping("/getCategorie/{id}")
  public ResponseEntity getCategoryById(@PathVariable("id") long id) {
    CategoryEntity s=catgoryservicce.getcategoryByid(id);
    return new ResponseEntity<>(s, HttpStatus.FOUND);
     
  }




  @PostMapping("/addCategory")
  public ResponseEntity AddCategory(@Valid @RequestBody CategoryEntity entity) {
      
      String response=catgoryservicce.addCategory(entity);
    System.out.println("inside Category"+response);
      
      return new ResponseEntity<>("Category Added Successfully"+entity.getName(),HttpStatus.FOUND);
  }
  

  @PostMapping("/removeCategory/{id}")
public ResponseEntity<?> deleteCategory(@PathVariable("id") long id) {

    String response = catgoryservicce.removeCategory(id);
    return new ResponseEntity<>("Deleted Successfully"+id, HttpStatus.OK);
}

  
}
