package com.example.demo.Service;

import org.hibernate.mapping.OneToMany;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.example.demo.Controller.OneToManyPare;
import com.example.demo.Controller.UserEntity;
import com.example.demo.Repository.OneToManyRepo;
import com.example.demo.Repository.UserRepository;

import jakarta.transaction.Transactional;

@Service
public class OnetoManyservi {
  @Autowired
  public OneToManyRepo repository1;

  @Transactional
  public String saveUser(OneToManyPare entity) {
    if (repository1.save(entity) != null) {
      return "User added successfully";
    } else {
      return "Error in adding user";
    }
  }

  public OneToManyPare findbyemial(String email) {
    Pageable page1 = PageRequest.of(0, 1);
    Page<OneToManyPare> res = repository1.findByEmail(email, page1);
    return res.getContent().get(0);
  }

}
