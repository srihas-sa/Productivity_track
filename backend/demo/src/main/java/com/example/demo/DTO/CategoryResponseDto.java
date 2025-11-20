package com.example.demo.DTO;

import java.util.List;

import com.example.demo.EntityList.CategoryEntity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CategoryResponseDto {
  public List<CategoryDto> categorylist;

  
}
