package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.EntityList.ProductEntity;


@Repository
public interface ProductRepo extends JpaRepository<ProductEntity,Long> {
  
}
