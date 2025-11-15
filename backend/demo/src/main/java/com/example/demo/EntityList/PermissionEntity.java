package com.example.demo.EntityList;

import java.time.LocalDateTime;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "User_Roles")
public class PermissionEntity {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private long id;
  private String permissionName;
  // ✅ Add back-reference to user
  @ManyToOne
  @JoinColumn(name = "user_id") // foreign key in PermissionEntity
  private UserEntity user;

  @CreationTimestamp
  @Column(updatable = false)
  private LocalDateTime createdTime;

  public PermissionEntity() {

  }

  public long getId() {
    return id;
  }

  public void setId(long id) {
    this.id = id;
  }

  public String getPermissionName() {
    return permissionName;
  }

  public void setPermissionName(String permissionName2) {
    this.permissionName = permissionName2;
  }

  public UserEntity getUser() {
    return user;
  }

  public LocalDateTime getCreatedTimestamp(){
    return createdTime;
  }

  public void setUser(UserEntity user) {
    this.user = user;
  }
}
