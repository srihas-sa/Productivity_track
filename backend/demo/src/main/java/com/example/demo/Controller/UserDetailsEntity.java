package com.example.demo.Controller;

import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Controller;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

@Entity
@Table(name = "UserDetailsEntity")
public class UserDetailsEntity {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private long Id;
  private String Ideas;
  @Lob
  @Column(columnDefinition = "TEXT")
  private String BlogDet;
  @Lob
  @Column(columnDefinition = "TEXT")
  private String Checklist;
  @OneToOne(mappedBy = "userDetails")
  private UserEntity user;

  public UserDetailsEntity() {

  }

  public long getId() {
    return Id;
  }

  public void setId(long id) {
    Id = id;
  }

  public String getIdeas() {
    return Ideas;
  }

  public void setIdeas(String Ideas) {
    this.Ideas = Ideas;
  }

  public String getBlogDet() {
    return BlogDet;
  }

  public void setBlogDet(String BlogDet) {
    this.BlogDet = BlogDet;
  }

  public String getChecklist() {
    return Checklist;
  }

  public void setChecklist(String Checklist) {
    this.Checklist = Checklist;
  }

  public UserEntity getUser() {
    return user;
  }

  public void setUser(UserEntity user) {
    this.user = user;
  }

}