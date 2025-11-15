package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.demo.EntityList.CategoryEntity;
import com.example.demo.Interface.ICategoryService;
import com.example.demo.Repository.CategoryServiceRepo;


@Service
public class ProCategoryService implements ICategoryService{

  @Autowired
  public CategoryServiceRepo catSerRepo;

  public List<CategoryEntity> getAllCategory(){
    List<CategoryEntity> ls=null;
    ls=catSerRepo.findAll();
    return ls;
  }
  public String addCategory(CategoryEntity ca){
    try{
    catSerRepo.save(ca);
  
    }
    catch(Exception err){
      return "Failure";
    }
    return "Success";
  }
  public String removeCategory(CategoryEntity ca){
    try{
    catSerRepo.delete(ca);
  
    }
    catch(Exception err){
      return "Failure";
    }
    return "Success";
  }
   
}
