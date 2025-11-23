package com.example.demo.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProductDto {
  private long productId;
  private String productName;
  private String description;
  private String image;
  private String quantity;
  private double price;
  private double discount;
  private double specialPrice;
  //private CategoryDto category;
}
