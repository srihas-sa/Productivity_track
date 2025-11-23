package com.example.demo.Service;

import java.util.List;
import java.util.Locale.Category;
import java.util.stream.Stream;

import org.apache.el.stream.Optional;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.ui.ModelMap;
import org.springframework.ui.ModelMapExtensionsKt;

import com.example.demo.DTO.CategoryDto;
import com.example.demo.DTO.CategoryResponseDto;
import com.example.demo.EntityList.CategoryEntity;
import com.example.demo.EntityList.ProductEntityclass;
import com.example.demo.Exception.ApiException;
import com.example.demo.Exception.ResourceNotFound21;
import com.example.demo.Interface.ICategoryService;
import com.example.demo.Repository.CategoryServiceRepo;


@Service
public class ProCategoryService implements ICategoryService{

  @Autowired
  public CategoryServiceRepo catSerRepo;

  @Autowired
  public ModelMapper modelMap;

  public CategoryResponseDto getAllCategory(int pageNo,int pageSize,String sortBy,String sortOrder){
    Sort sortedll=sortOrder.equals("asc")?Sort.by(sortBy).ascending(): Sort.by(sortBy).descending();
    Pageable pableDet=PageRequest.of(pageNo, pageSize,sortedll);
    Page<CategoryEntity> pageList=catSerRepo.findAll(pableDet);
    List<CategoryEntity> ls=pageList.getContent();
    if(ls.size()==0){
      throw new ApiException("There were no Category To Fetch Try Adding one");
    }
    List<CategoryDto> listOfCollDto=ls.stream().map(category -> modelMap.map(category,CategoryDto.class)).toList();
    CategoryResponseDto cateRespPageDetails=new CategoryResponseDto();
    cateRespPageDetails.setCategorylist(listOfCollDto);
    cateRespPageDetails.setLastPage(pageList.isLast());
    cateRespPageDetails.setTotalElements(pageList.getTotalElements());
    cateRespPageDetails.setTotalpages(pageList.getTotalPages());
    cateRespPageDetails.setPageNumber(pageNo);
    cateRespPageDetails.setPageSize(pageSize);
    return cateRespPageDetails;
  }

  public CategoryDto getcategoryByid(long id){
    
    CategoryEntity categoryreq=catSerRepo.findById(id).orElseThrow(()-> new ResourceNotFound21("Category","CategoryID",id));

    CategoryDto ca=modelMap.map(categoryreq,CategoryDto.class);


    return ca;
    
    
  }
  public CategoryDto addCategory(CategoryDto ca){
    CategoryEntity cateEntityobj=modelMap.map(ca,CategoryEntity.class);
    System.out.println(cateEntityobj.getName());
    CategoryEntity ce=catSerRepo.findByName(cateEntityobj.getName());
    if(ce!=null){
      throw new ApiException("Category with the Mentioned Category Name alredy Exist"+ce.getName());
      
    }
   
    CategoryEntity savedCategoryEntity=catSerRepo.save(cateEntityobj);
    CategoryDto returingDto=modelMap.map(savedCategoryEntity,CategoryDto.class);


System.out.println("After save -> " + returingDto.getName());

    
    return returingDto;


  }


  @Override
  public CategoryDto removeCategory(long id) {
    // TODO Auto-generated method stub
    //CategoryEntity catEn=modelMap.map(catDto,CategoryEntity.class);
    CategoryEntity respoAfterUpdate=catSerRepo.findById(id).orElseThrow(()->new ApiException("Mentioned id not Found for deletion "+id));
    catSerRepo.deleteById(id);
    return modelMap.map(respoAfterUpdate,CategoryDto.class);
  }

  
  public CategoryDto Updatecategory(CategoryDto catDto,long id){
    CategoryEntity catEn=modelMap.map(catDto,CategoryEntity.class);
    CategoryEntity respoAfterUpdate=catSerRepo.findById(id).orElseThrow(()->new ApiException("Mentioned id not Found for updation "+id));
    respoAfterUpdate.setName(catEn.getName());
    CategoryEntity savedCategoryEntity=catSerRepo.save(respoAfterUpdate);
    CategoryDto returingDto=modelMap.map(savedCategoryEntity,CategoryDto.class);
    return returingDto;
  }

  public java.util.Optional<ProductEntityclass> findById(long categoryId) {
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException("Unimplemented method 'findById'");
  }

 

  
   
}
