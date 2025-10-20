package com.example.demo.AuthFilter;

import com.example.demo.AuthFilter.JwtAuthenticationToken;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

public class JWTValidationFilter extends OncePerRequestFilter {

  private final AuthenticationManager authenticationManager;

  public JWTValidationFilter(AuthenticationManager authenticationManager) {
    this.authenticationManager = authenticationManager;
  }

  @Override
  protected void doFilterInternal(HttpServletRequest request,
      HttpServletResponse response,
      FilterChain filterChain) throws ServletException, IOException {

    String token = extractJwtFromRequest(request);
    if (token != null) {

      JwtAuthenticationToken authenticationToken = new JwtAuthenticationToken(token);
      Authentication authResult = authenticationManager.authenticate(authenticationToken);
      if (authResult.isAuthenticated()) {
        SecurityContextHolder.getContext().setAuthentication(authResult);
      }
    }

    filterChain.doFilter(request, response);
  }

  private String extractJwtFromRequest(HttpServletRequest request) {
    String bearerToken = request.getHeader("Authorization");
    if (bearerToken != null && bearerToken.startsWith("Bearer ")) {
      System.out.println("Bearer token found: " + bearerToken);
      return bearerToken.substring(7);
    }
    return null;
  }
}
