package com.example.demo.Entity;
//import java.security.Permission;
import java.security.Permissions;
import java.util.Collection;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.context.annotation.Bean;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;

import com.example.demo.Controller.UserDetailsEntity;
import com.example.demo.Controller.UserEntity;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;

import io.jsonwebtoken.lang.Collections;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
@Entity
public class ImagesUpload {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Lob
    @Column(columnDefinition = "LONGBLOB")
    private byte[] imageData;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private UserEntity user;

    public ImagesUpload() {
    }

    public ImagesUpload(byte[] imageData, UserEntity user) {
        this.imageData = imageData;
        this.user = user;
    }

    public Long getId() {
        return id;
    }
   
    public byte[] getImageData() {
        return imageData;
    }
}

 
