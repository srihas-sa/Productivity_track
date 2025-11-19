package com.example.demo.Service;

import java.util.List;
import java.util.Locale.Category;

import org.apache.el.stream.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.demo.EntityList.CategoryEntity;
import com.example.demo.Exception.ApiException;
import com.example.demo.Exception.ResourceNotFound21;
import com.example.demo.Interface.ICategoryService;
import com.example.demo.Repository.CategoryServiceRepo;


@Service
public class ProCategoryService implements ICategoryService{

  @Autowired
  public CategoryServiceRepo catSerRepo;

  public List<CategoryEntity> getAllCategory(){
    List<CategoryEntity> ls=null;

    ls=catSerRepo.findAll();
    if(ls.size()==0){
      throw new ApiException("There were no Category To Fetch Try Adding one");
    }
    return ls;
  }

  public CategoryEntity getcategoryByid(long id){
    
    CategoryEntity categoryreq=catSerRepo.findById(id).orElseThrow(()-> new ResourceNotFound21("Category","CategoryID",id));

    return categoryreq;
    
    
  }
  public String addCategory(CategoryEntity ca){
    CategoryEntity ce=catSerRepo.findByName(ca.getName());
    if(ce!=null){
      throw new ApiException("Category with the Mentioned Category Name alredy Exist"+ca.getName());
      
    }
    try{ 
    catSerRepo.save(ca);
    }
    catch(Exception e){
      return "Failuure";
    }
    return "Success";


  }
  public String removeCategory(long ca){
    CategoryEntity category = catSerRepo.findById(ca)
                .orElseThrow(() -> new ResourceNotFound21("Category","categoryId",ca));

                return "Success";
  }

  @Override
  public String removeCategory(CategoryEntity ca) {
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException("Unimplemented method 'removeCategory'");
  }

  
   
}
