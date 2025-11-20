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
  private List<CategoryDto> categorylist;
  private int pageSize;
  private int pageNumber;
  private long totalElements;
  private int totalpages;
  private boolean lastPage;

  
}
