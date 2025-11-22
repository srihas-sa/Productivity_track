package com.example.demo.Controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.DTO.ProductDto;
import com.example.demo.Service.ProductServiceimpl;

import jakarta.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
@RequestMapping("/api/products")
public class ProductController {
  
  public ProductServiceimpl productService;

  @PostMapping("/addProduct")
  public ResponseEntity<ProductDto> addProduct(@Valid @RequestBody ProductDto productDetails) {
      //TODO: process POST request
      ProductDto response=productService.addProduct(productDetails);
      return new ResponseEntity<>(response,HttpStatus.OK);
  }
  
  
  
  public void getProductbyId(){

  }
}
