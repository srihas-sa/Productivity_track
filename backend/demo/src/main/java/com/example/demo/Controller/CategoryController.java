package com.example.demo.Controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Config.AppConstants;
import com.example.demo.DTO.CategoryDto;
import com.example.demo.DTO.CategoryResponseDto;
import com.example.demo.EntityList.CategoryEntity;
import com.example.demo.Exception.ResourceNotFound21;
import com.example.demo.Interface.ICategoryService;
import com.example.demo.Service.ProCategoryService;

import jakarta.validation.Valid;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
@RequestMapping("/api/testing")
public class CategoryController {

  public List<CategoryEntity> categories;

  @Autowired
  public ProCategoryService catgoryservicce;

  public ResourceNotFound21 re;
  
  @GetMapping("/getCategorie/{id}")
  public ResponseEntity<CategoryDto> getCategoryById(@PathVariable("id") long id) {
    CategoryDto s=catgoryservicce.getcategoryByid(id);
    return new ResponseEntity<>(s, HttpStatus.FOUND);
     
  }
  

  @GetMapping("/getcategories")
  public ResponseEntity<CategoryResponseDto> getCategories(
    @RequestParam(defaultValue = AppConstants.page_Number,required = false) int pageNumber,
    @RequestParam(defaultValue = AppConstants.page_Size,required = false) int pageSize,
    @RequestParam(defaultValue = AppConstants.sortBy_category,required = false) String sort_By,
    @RequestParam(defaultValue = AppConstants.sortOrder,required = false) String sortOrder){
    
    System.out.println(pageNumber+" "+pageSize);
    CategoryResponseDto ll=catgoryservicce.getAllCategory(pageNumber,pageSize,sort_By,sortOrder);
    return new ResponseEntity<>(ll, HttpStatus.OK);
  }




  @PostMapping("/addCategory")
  public ResponseEntity<CategoryDto> AddCategory(@Valid @RequestBody CategoryDto entity) {
      System.out.println(entity.getName()+"In add category");
      CategoryDto response=catgoryservicce.addCategory(entity);
    System.out.println("inside Category"+response);
      
      return new ResponseEntity<>(response,HttpStatus.OK);
  }

  @PutMapping("/updateCategory/{id}")
  public ResponseEntity<CategoryDto> updateCategory(@Valid @RequestBody CategoryDto entity,@PathVariable("id") long id) {
      System.out.println(entity.getName()+"In Update  category");
      CategoryDto response=catgoryservicce.Updatecategory(entity,id);
    System.out.println("inside Update Category"+response);
      
      return new ResponseEntity<>(response,HttpStatus.OK);
  }

  @DeleteMapping("/removeCategory/{id}")
  public ResponseEntity<CategoryDto> removeCategory(@PathVariable("id") long id) {
      //System.out.println(entity.getName()+"In Remove  category");
      CategoryDto response=catgoryservicce.removeCategory(id);
    System.out.println("inside Remove Category"+response);
      
      return new ResponseEntity<>(response,HttpStatus.OK);
  }

  
  /* 
  @PostMapping("/removeCategory/{id}")
public ResponseEntity<?> deleteCategory(@PathVariable("id") long id) {

    String response = catgoryservicce.removeCategory(id);
    return new ResponseEntity<>("Deleted Successfully"+id, HttpStatus.OK);
}  */

  
}
