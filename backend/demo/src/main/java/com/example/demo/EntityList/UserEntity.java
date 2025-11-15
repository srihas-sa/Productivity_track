package com.example.demo.EntityList;

//import java.security.Permission;
import java.security.Permissions;
import java.time.LocalDateTime;
import java.util.Collection;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.hibernate.annotations.CreationTimestamp;
import org.springframework.context.annotation.Bean;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;

import io.jsonwebtoken.lang.Collections;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

@Entity
@Table(name = "UserEntity")
@JsonIdentityInfo(generator = com.fasterxml.jackson.annotation.ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class UserEntity implements UserDetails {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private long Id;
  private String name;
  @Column(unique = true)
  private String email;
  private String password;
  private String role;
  
  
  @CreationTimestamp
  @Column(updatable = false)
  private LocalDateTime createdTime;

  @OneToOne(cascade = { jakarta.persistence.CascadeType.ALL })
  private UserDetailsEntity userDetails;

  @OneToMany(mappedBy = "user", fetch = FetchType.EAGER,cascade = { jakarta.persistence.CascadeType.ALL })
  private List<PermissionEntity> permissions;

  @OneToMany(mappedBy = "user", fetch = FetchType.EAGER,cascade = { jakarta.persistence.CascadeType.ALL })
  private List<ImagesUpload> images;
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

  public List<ImagesUpload> getImages() {
    return images;
  } 

  public void setImages(List<ImagesUpload> images) {
    this.images = images;
  } 

  @Override
  public String toString() {
    return "UserEntity [Id=" + Id + ", name=" + name + ", email=" + email + ", password=" + password + ", userDetails="
        + userDetails + "]";
  }

  @Override
  public boolean isAccountNonExpired() {
    return true;
  }

  @Override
  public boolean isAccountNonLocked() {
    return true;
  }

  @Override
  public boolean isCredentialsNonExpired() {
    return true;
  }

  @Override
  public boolean isEnabled() {
    return true;
  }

  public void setRole(String role) {
    this.role = role;
  }

  public String getRole() {
    return role;
  }

  public List<PermissionEntity> getPermissions() {
    return permissions;
  }

  public void setPermissions(List<PermissionEntity> permissions) {
    this.permissions = permissions;
  }

  @Override
  public Collection<? extends GrantedAuthority> getAuthorities() {
    // TODO Auto-generated method stub
    Set<GrantedAuthority> authorities = new HashSet<>();
    authorities.add(new SimpleGrantedAuthority(role));
    permissions.forEach(permission -> {
      authorities.add(new SimpleGrantedAuthority(permission.getPermissionName()));
    });
    return authorities;

    // return Collections.emptyList();
  }

  @Override
  public String getUsername() {
    // TODO Auto-generated method stub
    return this.email;
  }

}