package com.example.demo.EntityList;

import java.time.LocalDateTime;

import javax.persistence.ManyToOne;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProductEntity{
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private long id;
  private String productName;
  private String description;
  private String categoryName;
  private double price;
  private String image;
  private String quantity;
  private double discount;
  private double specialPrice; 
  @CreationTimestamp
  @Column(updatable = false)
  private LocalDateTime createdTime;
  @CreationTimestamp
  private LocalDateTime updatedTime;

  @ManyToOne(cascade = { javax.persistence.CascadeType.ALL })
  @JoinColumn(name = "category_id")
  private CategoryEntity category;
  


}