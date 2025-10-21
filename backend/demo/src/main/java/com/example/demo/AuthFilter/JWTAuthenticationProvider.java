
package com.example.demo.AuthFilter;

import com.example.demo.AuthFilter.JwtAuthenticationToken;
import com.example.demo.Controller.UserEntity;
import com.example.demo.Service.SaveuserDetail;
import com.example.demo.AuthFilter.JWTUtil;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;

public class JWTAuthenticationProvider implements AuthenticationProvider {

  private JWTUtil jwtUtil;
  private SaveuserDetail userDetailsService;

  public JWTAuthenticationProvider(JWTUtil jwtUtil, SaveuserDetail userDetailsService2) {
    this.jwtUtil = jwtUtil;
    this.userDetailsService = userDetailsService2;
  }

  @Override
  public Authentication authenticate(Authentication authentication) throws AuthenticationException {
    String token = ((JwtAuthenticationToken) authentication).getToken();

    String username = jwtUtil.validateAndExtractUsername(token);
    if (username == null) {
      throw new BadCredentialsException("Invalid JWT Token");
    }

    UserEntity userDetails = (UserEntity) userDetailsService.loadUserByUsername(username);
    System.out.println("JWTAuthenticationProvider - User details loaded for: " + username);
    return new UsernamePasswordAuthenticationToken(userDetails, token, userDetails.getAuthorities());
  }

  @Override
  public boolean supports(Class<?> authentication) {
    return JwtAuthenticationToken.class.isAssignableFrom(authentication);
  }
}
