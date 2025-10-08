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

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.transaction.Transactional;

@Service
public class OnetoManyservi {
  @Autowired
  public OneToManyRepo repository1;
  @PersistenceContext
  private EntityManager entityManager;

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

  public void findbyblogCriteriaApi(String blog) {

    CriteriaBuilder cb = entityManager.getCriteriaBuilder();
    var cq = cb.createQuery(OneToManyPare.class);
    var root = cq.from(OneToManyPare.class);
    var details = root.join("userDetails");
    cq.select(root).where(cb.like(details.get("BlogDet"), "%" + "This is my first blog" + "%"));
    var query = entityManager.createQuery(cq);
    var result = query.getResultList();
    System.out.println("Criteria API result: " + result);
  }
}
