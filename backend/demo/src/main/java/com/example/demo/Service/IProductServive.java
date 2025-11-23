package com.example.demo.Service;

import java.util.List;

import com.example.demo.DTO.ProductDto;
import com.example.demo.DTO.Productresponse;
import com.example.demo.EntityList.CategoryEntity;
import com.example.demo.EntityList.ProductEntityclass;

public interface IProductServive {
  public ProductDto getProductById(long id);
  public ProductDto addProduct(ProductEntityclass product,long categoryId);
  public ProductDto removeProduct(long product);
  public Productresponse getProductsByCateId(long id); // Product based on Category Id;
  public Productresponse getAllProducts();  //All Products
  public Productresponse getProductsByKeyword(String keyword); //Search Products by keyword
  public ProductDto updateProduct(ProductDto pro,long id);

}
