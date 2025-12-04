package com.example.demo.Service;

import java.util.List;

import com.example.demo.DTO.ProductDto;
import com.example.demo.DTO.Productresponse;
import com.example.demo.EntityList.CategoryEntity;
import com.example.demo.EntityList.ProductEntityclass;

public interface IProductServive {
  public ProductDto getProductById(long id);
  public ProductDto addProduct( ProductDto product,long categoryId);
  public ProductDto removeProduct(long product);
  public Productresponse getProductsByCateId(long id,int pageNo,int pageSize,String sortBy,String sortOrder); // Product based on Category Id;
  public Productresponse getAllProducts(int pageNo,int pageSize,String sortBy,String sortOrder);  //All Products
  public Productresponse getProductsByKeyword(String keyword,int pageNo,int pageSize,String sortBy,String sortOrder); //Search Products by keyword
  public ProductDto updateProduct(ProductDto pro,long id);

}
