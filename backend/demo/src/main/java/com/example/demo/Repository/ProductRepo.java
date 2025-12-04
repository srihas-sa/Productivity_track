package com.example.demo.Repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.access.method.P;
import org.springframework.stereotype.Repository;

import com.example.demo.DTO.Productresponse;
import com.example.demo.EntityList.CategoryEntity;
import com.example.demo.EntityList.ProductEntityclass;


@Repository
public interface ProductRepo extends JpaRepository<ProductEntityclass,Long> {
  public Page findByCategory(CategoryEntity category, Pageable pableDet);

  public Page findByProductNameLikeIgnoreCase(String keyword,Pageable pableDet);
}
