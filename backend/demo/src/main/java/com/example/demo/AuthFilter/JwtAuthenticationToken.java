package com.example.demo.AuthFilter;

import java.util.Collection;

import org.springframework.security.authentication.AbstractAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;

import com.example.demo.Controller.UserEntity;

public class JwtAuthenticationToken extends AbstractAuthenticationToken {

  private final String token;

  private Object principal;

  public JwtAuthenticationToken(String token) {
    super(null);
    Object principal = null;
    this.token = token;
    setAuthenticated(false);
  }

  // ✅ Constructor for authenticated token
  public JwtAuthenticationToken(Object principal, String token, Collection<? extends GrantedAuthority> authorities) {
    super(authorities);
    this.principal = principal;
    this.token = token;

    setAuthenticated(true); // important
  }

  public String getToken() {
    return token;
  }

  @Override
  public Object getCredentials() {
    return token;
  }

  @Override
  public Object getPrincipal() {
    return null;
  }
}
