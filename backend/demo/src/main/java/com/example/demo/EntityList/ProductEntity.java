package com.example.demo.EntityList;

import java.time.LocalDateTime;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity

public class ProductEntity{
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private long id;
  private String productName;
  private String description;
  private String category;
  private double price;
  @CreationTimestamp
  @Column(updatable = false)
  private LocalDateTime createdTime;
  @CreationTimestamp
  private LocalDateTime updatedTime;
  public long getId() {
    return id;
  }
  public void setId(long id) {
    this.id = id;
  }
  public String getProductName() {
    return productName;
  }
  public void setProductName(String productName) {
    this.productName = productName;
  }
  public String getDescription() {
    return description;
  }
  public void setDescription(String description) {
    this.description = description;
  }
  public String getCategory() {
    return category;
  }
  public void setCategory(String category) {
    this.category = category;
  }
  public double getPrice() {
    return price;
  }
  public void setPrice(double price) {
    this.price = price;
  }
  public LocalDateTime getUpdatedTime() {
    return updatedTime;
  }
  public void setUpdatedTime(LocalDateTime updatedTime) {
    this.updatedTime = updatedTime;
  }


}