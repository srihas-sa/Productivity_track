package com.example.demo.Service;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;
import java.util.UUID;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.security.access.method.P;
import org.springframework.stereotype.Service;

import com.example.demo.DTO.CategoryDto;
import com.example.demo.DTO.ProductDto;
import com.example.demo.DTO.Productresponse;
import com.example.demo.EntityList.CategoryEntity;
import com.example.demo.EntityList.ProductEntityclass;
import com.example.demo.Exception.ApiException;
import com.example.demo.Repository.CategoryServiceRepo;
import com.example.demo.Repository.ProductRepo;

import jakarta.validation.Valid;

@Service
public class ProductServiceimpl implements IProductServive{

  @Autowired
  private ProductRepo productRepo;

  @Autowired
  private ModelMapper modelMapper;


  @Autowired
  private ProCategoryService proCategoryService;

  @Autowired
  private CategoryServiceRepo categoryServiceRepo;

  @Autowired
  private FileServiceImpl fileServiceImpl;

  @Value("${project.image.upload.dir}")
  private String path;
  @Override
  public ProductDto getProductById(long id) {
    ProductEntityclass response=productRepo.findById(id).orElseThrow(()->new ApiException("No product to show with mentioned id"+id));
    ProductDto prodt=modelMapper.map(response, ProductDto.class);
    return prodt;
  }

  @Override
  public ProductDto addProduct(ProductDto productDetails,long categoryId) {
    // TODO Auto-generated method stub

    CategoryEntity response=categoryServiceRepo.findById(categoryId).orElseThrow(()->new ApiException("No Category found with mentioned id"+categoryId));
    //CategoryEntity category=modelMapper.map(response, CategoryEntity.class);

    List<ProductEntityclass> productList=response.getProductlist();
    for(ProductEntityclass p:productList){
      if(p.getProductName().equalsIgnoreCase(productDetails.getProductName())){
        throw new ApiException("Product with name "+productDetails.getProductName()+" already exists in category id :"+categoryId);
      }
    }
    ProductEntityclass response1=modelMapper.map(productDetails, ProductEntityclass.class);
    if(response!=null){   
      response1.setCategory(response);
      response1.setSpecialPrice(response1.getPrice() - (response1.getPrice() * (response1.getDiscount() / 100.0)));
      response1=productRepo.save(response1);
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
    System.out.println("In service layer remove product"+response.getDescription());
    ProductDto prodt=modelMapper.map(response, ProductDto.class);
    return prodt;
  }
  
  @Override
  public Productresponse getProductsByCateId(long categoryId,int pageNo,int pageSize,String sortBy,String sortOrder) {
    // TODO Auto-generated method stub
    Sort sortedll=sortOrder.equals("asc")?
    Sort.by(sortBy).ascending(): 
    Sort.by(sortBy).descending();

    Pageable pableDet=PageRequest.of(pageNo, pageSize,sortedll);

     CategoryEntity response=categoryServiceRepo.findById(categoryId).orElseThrow(()->new ApiException("No Category found with mentioned id"+categoryId));
     Page pageList=productRepo.findByCategory(response,pableDet);
     //Page<ProductEntityclass> products=productRepo.findByCategory(response,pableDet);
     List<ProductEntityclass> ls=pageList.getContent();
     if(ls.size()==0){
      throw new ApiException("There were no Products To Fetch for the Category Id "+categoryId);
     }
      Productresponse products=new Productresponse();
      List<ProductDto> listOfCollDto=ls.stream().map(product -> modelMapper.map(product,ProductDto.class)).toList();
      products.setProductList(listOfCollDto);
      products.setLastPage(pageList.isLast());
      products.setTotalElements(pageList.getTotalElements());
     
    products.setTotalpages(pageList.getTotalPages());
    products.setPageNumber(pageNo);
    products.setPageSize(pageSize);
    //List<ProductEntityclass> products=category.getProductlist();
    return products;
  }

  @Override
  public Productresponse getProductsByKeyword(String keyword,int pageNo,int pageSize,String sortBy,String sortOrder) {
    // TODO Auto-generated method stub
     //List<ProductEntityclass> response=productRepo.findByProductNameLikeIgnoreCase("%"+keyword+"%");
     //Productresponse products=productRepo.findByCategory(response);
    //List<ProductEntityclass> products=category.getProductlist();
    Sort sortedll=sortOrder.equals("asc")?
    Sort.by(sortBy).ascending(): 
    Sort.by(sortBy).descending();

    Pageable pableDet=PageRequest.of(pageNo, pageSize,sortedll);

     Page pageList=productRepo.findByProductNameLikeIgnoreCase("%"+keyword+"%",pableDet);
     //Page<ProductEntityclass> products=productRepo.findByCategory(response,pableDet);
     List<ProductEntityclass> ls=pageList.getContent();
     if(ls.size()==0){
      throw new ApiException("There were no Products To Fetch for the  this Keyword: "+keyword);
     }
      Productresponse products=new Productresponse();
      List<ProductDto> listOfCollDto=ls.stream().map(product -> modelMapper.map(product,ProductDto.class)).toList();
      products.setProductList(listOfCollDto);
      products.setLastPage(pageList.isLast());
      products.setTotalElements(pageList.getTotalElements());
     
    products.setTotalpages(pageList.getTotalPages());
    products.setPageNumber(pageNo);
    products.setPageSize(pageSize);
    //List<ProductEntityclass> products=category.getProductlist();
    return products;
  }

  

  @Override
  public Productresponse getAllProducts(int pageNo,int pageSize,String sortBy,String sortOrder) {
    Sort sortedll=sortOrder.equals("asc")?
    Sort.by(sortBy).ascending(): 
    Sort.by(sortBy).descending();
    Pageable pableDet=PageRequest.of(pageNo, pageSize,sortedll);
    Page pageList=productRepo.findAll(pableDet);
    List<ProductEntityclass> ls=pageList.getContent();
    //List<ProductEntityclass> products=productRepo.findAll();
    Productresponse products=new Productresponse();
    List<ProductDto> productDtos=ls.stream().map(prod->modelMapper.map(prod,ProductDto.class)).toList();
    if(productDtos.size()==0){
      throw new ApiException("No Products found in the Database");
    }
    
    products.setProductList(productDtos);
      products.setLastPage(pageList.isLast());
      products.setTotalElements(pageList.getTotalElements());
     
    products.setTotalpages(pageList.getTotalPages());
    products.setPageNumber(pageNo);
    products.setPageSize(pageSize);
    return products;
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


  public ProductDto addProductImage( @Valid  org.springframework.web.multipart.MultipartFile image, long productId) throws IOException {
    ProductEntityclass existingProduct=productRepo.findById(productId).orElseThrow(()->new ApiException("No product to Update with mentioned id"+productId));
    String imageName=image.getOriginalFilename();
    
    String uploadedFileName=fileServiceImpl.uploadImage(path,image);
    existingProduct.setImage(uploadedFileName);
        System.out.println("File is Uploading.....1 settingImage");

    ProductEntityclass savedexistingProduct=productRepo.save(existingProduct);
        System.out.println("File is Uploading.....1 Saving Image ");

    return modelMapper.map(savedexistingProduct, ProductDto.class);
  }

   

  
}
