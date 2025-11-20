package com.example.demo.Interface;

import java.util.List;

import com.example.demo.DTO.CategoryDto;
import com.example.demo.DTO.CategoryResponseDto;
import com.example.demo.EntityList.CategoryEntity;

public interface ICategoryService {
  public CategoryResponseDto getAllCategory(int pageNumber,int pageSize,String sortBy,String sortOrder);
  public CategoryDto addCategory(CategoryDto categoryDtoo);
  public CategoryDto removeCategory(long id);
  public CategoryDto Updatecategory(CategoryDto ca,long id);
  public CategoryDto getcategoryByid(long id);
}
