package com.example.demo.Service;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.DTO.ProductDto;
import com.example.demo.EntityList.CategoryEntity;
import com.example.demo.EntityList.ProductEntity;
import com.example.demo.Repository.ProductRepo;

@Service
public class ProductServiceimpl implements IProductServive{

  @Autowired
  public ProductRepo productRepo;

  public ModelMapper modelMapper;

  @Override
  public ProductDto getProductById(long id) {
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException("Unimplemented method 'getProductById'");
  }

  @Override
  public ProductDto addProduct(ProductDto product) {
    // TODO Auto-generated method stub
    ProductEntity productcl=modelMapper.map(product, ProductEntity.class);
    ProductEntity response=productRepo.save(productcl);
    return  modelMapper.map(response, ProductDto.class);
  }

  @Override
  public ProductDto removeProduct(ProductDto product) {
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException("Unimplemented method 'removeProduct'");
  }

  @Override
  public List<ProductDto> getProducts(CategoryEntity ca) {
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException("Unimplemented method 'getProducts'");
  }

   

  
}
