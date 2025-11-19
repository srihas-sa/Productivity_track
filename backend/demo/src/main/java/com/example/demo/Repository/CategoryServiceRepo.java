package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.EntityList.CategoryEntity;


@Repository
public interface CategoryServiceRepo extends JpaRepository<CategoryEntity,Long> {
  public CategoryEntity findByName(String str);
}
