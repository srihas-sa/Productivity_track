package com.example.demo.Controller;

import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Controller;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

@Entity
@Table(name = "User_login")
public class UserEntity {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private long Id;
  private String name;
  @Column(unique = true)
  private String email;
  private String password;
  @OneToOne(cascade = { jakarta.persistence.CascadeType.ALL })
  private UserDetailsEntity userDetails;

  public UserEntity() {

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

  public UserDetailsEntity getUserDetails() {
    return userDetails;
  }

  public void setUserDetails(UserDetailsEntity userDetails) {
    this.userDetails = userDetails;
  }

}