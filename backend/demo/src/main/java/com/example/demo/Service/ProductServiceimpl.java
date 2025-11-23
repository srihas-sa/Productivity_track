package com.example.demo.Service;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.DTO.CategoryDto;
import com.example.demo.DTO.ProductDto;
import com.example.demo.DTO.Productresponse;
import com.example.demo.EntityList.CategoryEntity;
import com.example.demo.EntityList.ProductEntityclass;
import com.example.demo.Exception.ApiException;
import com.example.demo.Repository.CategoryServiceRepo;
import com.example.demo.Repository.ProductRepo;

@Service
public class ProductServiceimpl implements IProductServive{

  @Autowired
  public ProductRepo productRepo;

  @Autowired
  public ModelMapper modelMapper;


  @Autowired
  public ProCategoryService proCategoryService;

  @Autowired
  public CategoryServiceRepo categoryServiceRepo;
  @Override
  public ProductDto getProductById(long id) {
    ProductEntityclass response=productRepo.findById(id).orElseThrow(()->new ApiException("No product to show with mentioned id"+id));
    ProductDto prodt=modelMapper.map(response, ProductDto.class);
    return prodt;
  }

  @Override
  public ProductDto addProduct(ProductEntityclass product,long categoryId) {
    // TODO Auto-generated method stub

    CategoryEntity response=categoryServiceRepo.findById(categoryId).orElseThrow(()->new ApiException("No Category found with mentioned id"+categoryId));
    //CategoryEntity category=modelMapper.map(response, CategoryEntity.class);
    ProductEntityclass response1=null;
    if(response!=null){   
      product.setCategory(response);
      product.setSpecialPrice(product.getPrice() - (product.getPrice() * (product.getDiscount() / 100.0)));
      response1=productRepo.save(product);
      return modelMapper.map(response1, ProductDto.class);
    }
    else{
      throw new ApiException("Error while adding product to category id:"+categoryId);
    }
    //return  modelMapper.map(response1, ProductDto.class);
  }

  @Override
  public ProductDto removeProduct(long id) {
    // TODO Auto-generated method stub
    ProductEntityclass response=productRepo.findById(id).orElseThrow(()->new ApiException("No product to remove with mentioned id"+id));
    System.out.println("In service layer remove product"+response.getDescription());
    if(response!=null){
      productRepo.deleteById(id);
    }
    ProductDto prodt=modelMapper.map(response, ProductDto.class);
    return prodt;
  }
  
  @Override
  public Productresponse getProductsByCateId(long categoryId) {
    // TODO Auto-generated method stub
     CategoryEntity response=categoryServiceRepo.findById(categoryId).orElseThrow(()->new ApiException("No Category found with mentioned id"+categoryId));
     Productresponse products=productRepo.findByCategory(response);
    //List<ProductEntityclass> products=category.getProductlist();
    return products;
  }

  @Override
  public Productresponse getProductsByKeyword(String keyword) {
    // TODO Auto-generated method stub
     List<ProductEntityclass> response=productRepo.findByProductNameLikeIgnoreCase("%"+keyword+"%");
     //Productresponse products=productRepo.findByCategory(response);
    //List<ProductEntityclass> products=category.getProductlist();
    Productresponse pr=new Productresponse();
    List<ProductDto> productlist=response.stream().map(prod->modelMapper.map(prod,ProductDto.class)).toList();
    pr.setProductList(productlist);
    return pr;
  }

  

  @Override
  public Productresponse getAllProducts() {
    List<ProductEntityclass> products=productRepo.findAll();
    Productresponse pr=new Productresponse();
    List<ProductDto> productDtos=products.stream().map(prod->modelMapper.map(prod,ProductDto.class)).toList();
    pr.setProductList(productDtos);
    return pr;
  }



  @Override
  public ProductDto updateProduct(ProductDto pro, long id) {
    // TODO Auto-generated method stub
    ProductEntityclass existingProduct=productRepo.findById(id).orElseThrow(()->new ApiException("No product to Update with mentioned id"+id));
    //modelMapper.map(pro,existingProduct);
    //existingProduct.setProductId(id);
    existingProduct.setSpecialPrice(pro.getPrice() - (pro.getPrice() * (pro.getDiscount() / 100.0)));
    existingProduct.setProductName(pro.getProductName());
    existingProduct.setDiscount(pro.getDiscount());
    existingProduct.setPrice(pro.getPrice());
    existingProduct.setQuantity(pro.getQuantity());
    //existingProduct.setImage(pro.getImage());
    existingProduct.setDescription(pro.getDescription());

    ProductEntityclass response2=productRepo.save(existingProduct);
    return modelMapper.map(response2,ProductDto.class); 
  }

   

  
}
