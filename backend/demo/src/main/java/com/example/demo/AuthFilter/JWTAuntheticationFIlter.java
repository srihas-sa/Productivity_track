package com.example.demo.AuthFilter;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureException;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import org.springframework.boot.autoconfigure.security.SecurityProperties.User;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.IOException;
import java.util.Collections;

public class JWTAuntheticationFIlter extends OncePerRequestFilter {

  private final String secretKey = "your-secret-key"; // Replace with actual secret

  @Override
  protected void doFilterInternal(HttpServletRequest request,
      HttpServletResponse response,
      FilterChain filterChain)
      throws ServletException, IOException {

    String path = request.getServletPath();
    if (!path.equals("/api/login")) {
      filterChain.doFilter(request, response);
      return;
    }
    ObjectMapper mapper = new ObjectMapper();
    LoginRequest loginRequest = mapper.readValue(request.getInputStream(), LoginRequest.class);
    String username = loginRequest.getUsername();
    String password = loginRequest.getPassword(); // You might want to validate this password as well
    UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(username, password);
    Authentication authResult = authenticationManager.authenticate(authentication);

  }
}
