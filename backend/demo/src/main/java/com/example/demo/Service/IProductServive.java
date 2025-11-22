package com.example.demo.Service;

import java.util.List;

import com.example.demo.DTO.ProductDto;
import com.example.demo.EntityList.CategoryEntity;

public interface IProductServive {
  public ProductDto getProductById(long id);
  public ProductDto addProduct(ProductDto product);
  public ProductDto removeProduct(ProductDto product);
  public List<ProductDto> getProducts(CategoryEntity ca);
  

}
