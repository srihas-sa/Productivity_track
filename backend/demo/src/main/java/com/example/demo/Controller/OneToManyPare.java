package com.example.demo.Controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Controller;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

@Entity
@Table(name = "OneToManyParent")
public class OneToManyPare {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private long Id;
  private String name;
  @Column(unique = true)
  private String email;
  private String password;
  @OneToMany(cascade = { jakarta.persistence.CascadeType.ALL }, orphanRemoval = true)
  @JoinColumn(name = "parent_id", referencedColumnName = "Id")
  private List<OneToManyChild> userDetails;

  public OneToManyPare() {

  }

  public long getId() {
    return Id;
  }

  public void setId(long id) {
    Id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public List<OneToManyChild> getUserDetails() {
    return userDetails;
  }

  public void setUserDetails(List<OneToManyChild> details1) {
    this.userDetails = details1;
  }

}
