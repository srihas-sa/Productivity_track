package com.example.demo.Controller;

import org.springframework.data.jpa.domain.Specification;

import com.example.demo.EntityList.UserEntity;

public class UserSpecification {

  public static Specification<UserEntity> hasName(String name) {
    return (root, query, cb) -> name == null ? null : cb.equal(root.get("name"), name);
  }

  public static Specification<UserEntity> emailContains(String email) {
    return (root, query, cb) -> email == null ? null : cb.like(root.get("email"), "%" + email + "%");
  }

  public static Specification<UserEntity> ageGreaterThan(Integer age) {
    return (root, query, cb) -> age == null ? null : cb.greaterThan(root.get("age"), age);
  }
}
