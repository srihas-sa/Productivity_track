package com.example.demo.Interface;

import java.util.List;

import com.example.demo.EntityList.CategoryEntity;

public interface ICategoryService {
  public List<CategoryEntity> getAllCategory();
  public String addCategory(CategoryEntity ca);
  public String removeCategory(CategoryEntity ca);

}
