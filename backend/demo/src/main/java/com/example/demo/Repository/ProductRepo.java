package com.example.demo.Repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.DTO.Productresponse;
import com.example.demo.EntityList.ProductEntityclass;


@Repository
public interface ProductRepo extends JpaRepository<ProductEntityclass,Long> {
  public Productresponse findByCategory(com.example.demo.EntityList.CategoryEntity category);

  public List<ProductEntityclass> findByProductNameLikeIgnoreCase(String keyword);
}
