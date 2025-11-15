package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.example.demo.EntityList.UserEntity;
import com.example.demo.Repository.UserRepository;

import jakarta.transaction.Transactional;

@Service
public class SaveuserDetail implements UserDetailsService {
  @Autowired
  public UserRepository repository1;

  @Transactional
  public String saveUser(UserEntity entity) {
    if (repository1.save(entity) != null) {
      return "User added successfully";
    } else {
      return "Error in adding user";
    }
  }

  public UserEntity findbyemial(String email) {
    return repository1.findByEmail(email);
  }

  public List<UserEntity> findbyname(String name) {
    System.out.println("In service " + name);
    System.out.println("In service 2" + repository1.findmyname(name));
    return repository1.findmyname(name);
  }

  @Override
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    // TODO Auto-generated method stub
    System.out.println("In loadUserByUsername: " + username);
    return repository1.findByEmail(username);
    // throw new UnsupportedOperationException("Unimplemented method
    // 'loadUserByUsername'");
  }

}
