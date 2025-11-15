package com.example.demo.Controller;

import java.util.List;

import com.example.demo.EntityList.PermissionEntity;
import com.example.demo.EntityList.UserEntity;

public class LoginDTO {
  private String email;
  private String role;
  private List<String> permissions;
  //private String password;
  //private String name;
  //private String token;
  

  public LoginDTO(UserEntity user) {
    this.email = user.getEmail();
    this.role = user.getRole();
    this.permissions = user.getPermissions()
        .stream()
        .map(PermissionEntity::getPermissionName)
        .toList();
  }

  // getters
    public String getName() {
        return name;
    }

    public String getPassword() {
        return password;
    }

    public String getToken() {
        return token;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setPassword(String password) {
        this.password = password;
    }
    public String getRole() {
        return role;
    }
    public List<String> getPermissions() {
        return permissions;
    }
    

    public void setRole(String role) {
        this.role = role;
    }
    public void setPermissions(List<String> permissions) {
        this.permissions = permissions;
    }

    
}
