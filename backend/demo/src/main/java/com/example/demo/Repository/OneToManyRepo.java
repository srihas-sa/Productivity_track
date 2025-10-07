package com.example.demo.Repository;

import org.springframework.stereotype.Repository;
import org.springframework.data.domain.Page;
//import org.hibernate.query.Page;
//import org.hibernate.query.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Controller.OneToManyPare;
import com.example.demo.Controller.UserEntity;

@Repository
public interface OneToManyRepo extends JpaRepository<OneToManyPare, Long> {
  Page<OneToManyPare> findByEmail(String email, Pageable paget); // to get the latest inserted

}
