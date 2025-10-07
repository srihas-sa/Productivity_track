package com.example.demo.Repository;

import org.springframework.stereotype.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.Controller.UserEntity;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Long> {
  UserEntity findByEmail(String email);

  @Query("SELECT u FROM UserEntity u join u.userDetails ad where LOWER(u.name) = LOWER(:name)")
  List<UserEntity> findmyname(@Param("name") String name);
}
