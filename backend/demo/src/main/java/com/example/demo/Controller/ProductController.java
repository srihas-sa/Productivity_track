package com.example.demo.Controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.Config.AppConstants;
import com.example.demo.DTO.CategoryDto;
import com.example.demo.DTO.ProductDto;
import com.example.demo.DTO.Productresponse;
import com.example.demo.EntityList.ProductEntityclass;
import com.example.demo.Service.ProductServiceimpl;

import jakarta.validation.Valid;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
@RequestMapping("/api/testing")
public class ProductController {
  
  @Autowired
  public ProductServiceimpl productService;

  @PostMapping("admin/categories/{categoryid}/product")
  public ResponseEntity<ProductDto> addProduct(@Valid @RequestBody ProductDto productDetails, @PathVariable("categoryid") long categoryId) {
      //TODO: process POST request
      ProductDto response=productService.addProduct(productDetails,categoryId);
      return new ResponseEntity<>(response,HttpStatus.OK);

  }

   //api/testing/pubilc/categories/19/product
  @GetMapping("pubilc/categories/{categoryid}/product")
  public ResponseEntity<Productresponse> getProductByCategory(
    @RequestParam(defaultValue = AppConstants.page_Number,required = false) int pageNumber,
    @RequestParam(defaultValue = AppConstants.page_Size,required = false) int pageSize,
    @RequestParam(defaultValue = AppConstants.sortBy_product,required = false) String sort_By,
    @RequestParam(defaultValue = AppConstants.sortOrder,required = false) String sortOrder,
    @PathVariable("categoryid") long categoryId) {
      Productresponse response=productService.getAllProducts(pageNumber,pageSize,sort_By,sortOrder);
      return new ResponseEntity<>(response,HttpStatus.OK);

  }

  @GetMapping("pubilc/products/keyword/{keyword}")
  public ResponseEntity<Productresponse> getProductByCategory(
    @RequestParam(defaultValue = AppConstants.page_Number,required = false) int pageNumber,
    @RequestParam(defaultValue = AppConstants.page_Size,required = false) int pageSize,
    @RequestParam(defaultValue = AppConstants.sortBy_product,required = false) String sort_By,
    @RequestParam(defaultValue = AppConstants.sortOrder,required = false) String sortOrder,
    @PathVariable("keyword") String keyword) {

      Productresponse response=productService.getProductsByKeyword(keyword,pageNumber,pageSize,sort_By,sortOrder);
      return new ResponseEntity<>(response,HttpStatus.OK);

  }

  @GetMapping("public/getproducts")
  public ResponseEntity<Productresponse> getAllproducts(
    @RequestParam(defaultValue = AppConstants.page_Number,required = false) int pageNumber,
    @RequestParam(defaultValue = AppConstants.page_Size,required = false) int pageSize,
    @RequestParam(defaultValue = AppConstants.sortBy_product,required = false) String sort_By,
    @RequestParam(defaultValue = AppConstants.sortOrder,required = false) String sortOrder
  ) {
      Productresponse response=productService.getAllProducts(pageNumber,pageSize,sort_By,sortOrder);
      return new ResponseEntity<>(response,HttpStatus.OK);
  }
  


  

  @DeleteMapping("/admin/removeProduct/{id}")
  public ResponseEntity<ProductDto> removeProduct(@PathVariable(name = "id") long id) {
      //TODO: process POST request
      ProductDto response=productService.removeProduct(id);
      return new ResponseEntity<>(response,HttpStatus.OK);
      
  }

  @PutMapping("/admin/product/{id}")
  public ResponseEntity<ProductDto> updateCategory(@Valid @RequestBody ProductDto entity,@PathVariable("id") long id) {
      System.out.println(entity.getProductName()+"In Update  products");
      ProductDto response=productService.updateProduct(entity,id);
    System.out.println("inside Update Category"+response);
      
      return new ResponseEntity<>(response,HttpStatus.OK);
  }

  @PutMapping("/products/{productId}/image")
  public ResponseEntity<ProductDto> addProductImage(@RequestParam("Image") MultipartFile image,
      @PathVariable("productId") long productId) throws IOException {
    ProductDto response = productService.addProductImage(image, productId);
    return new ResponseEntity<>(response, HttpStatus.OK);
  }

  
  
  
}
