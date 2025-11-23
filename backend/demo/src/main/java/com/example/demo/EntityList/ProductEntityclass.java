package com.example.demo.EntityList;

import java.time.LocalDateTime;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class ProductEntityclass {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long productId;

    private String productName;
    private String description;
    //private String categoryName;
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

    @ManyToOne
    @JoinColumn(name = "category_id")
    private CategoryEntity category;

}
