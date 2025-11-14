package com.example.demo.Security;

import com.example.demo.AuthFilter.JWTAuntheticationFIlter;
import com.example.demo.AuthFilter.JWTAuthenticationProvider;
import com.example.demo.AuthFilter.JWTRefreshFilter;
//import com.conceptandcoding.learningspringboot.JWT.filters.JWTAuthenticationFilter;
//import com.conceptandcoding.learningspringboot.JWT.filters.JWTRefreshFilter;
//import com.conceptandcoding.learningspringboot.JWT.filters.JwtValidationFilter;
import com.example.demo.AuthFilter.JWTUtil;
import com.example.demo.AuthFilter.JWTValidationFilter;
import com.example.demo.Entity.UserEntity;
import com.example.demo.Service.SaveuserDetail;

import jakarta.servlet.Filter;

//import com.example.demo.AuthFilter.JWTAuthenticationProvider;
//import com.example.demo.AuthFilter.JWTAuthenticationFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.ProviderManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.jaasapi.JaasApiIntegrationFilter;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.Arrays;

@Configuration
//@EnableWebSecurity
@EnableMethodSecurity(prePostEnabled = true)
public class SecurityConfigForJwt {

  private JWTUtil jwtUtil;
  private SaveuserDetail userDetailsService;

  @Autowired
  public SecurityConfigForJwt(JWTUtil jwtUtil, SaveuserDetail userDetailsService) {
    this.jwtUtil = jwtUtil;
    this.userDetailsService = userDetailsService;
  }

  @Bean
  public JWTAuthenticationProvider jwtAuthenticationProvider() {
    return new JWTAuthenticationProvider(jwtUtil, userDetailsService);
  }

  @Bean
  public DaoAuthenticationProvider daoAuthenticationProvider() {
    DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
    provider.setUserDetailsService((UserDetailsService) userDetailsService);
    provider.setPasswordEncoder(passwordEncoder());
    return provider;
  }

  @Bean
  public PasswordEncoder passwordEncoder() {
    return new BCryptPasswordEncoder();
  }

  @Bean
  public SecurityFilterChain securityFilterChain(HttpSecurity http, AuthenticationManager authenticationManager,
      JWTUtil jwtUtil) throws Exception {

    // Authentication filter responsible for login
    JWTAuntheticationFIlter jwtAuthFilter = new JWTAuntheticationFIlter(authenticationManager, jwtUtil);
    JWTValidationFilter jwtValidationFilter = new JWTValidationFilter(authenticationManager);
    JWTRefreshFilter jwtRefreshFilter = new JWTRefreshFilter(jwtUtil, authenticationManager);
    // Validation filter for checking JWT in every request
    // JaasApiIntegrationFilter jwtValidationFilter = new
    // JWTAuntheticationFIlter(authenticationManager);

    // refresh filter for checking JWT in every request
    // JWTRefreshFilter jwtRefreshFilter = new JWTRefreshFilter(jwtUtil,
    // authenticationManager);

    http.authorizeHttpRequests(auth -> auth
        .requestMatchers("/api/signup", "/api/login", "http://localhost:3000").permitAll()
        // .requestMatchers("/api/login")
        .anyRequest().authenticated())
        .sessionManagement(session -> session
            .sessionCreationPolicy(SessionCreationPolicy.STATELESS))
        .csrf(csrf -> csrf.disable())
        .cors(cors -> {
        })
        .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class) // generate token filter
        .addFilterAfter(jwtValidationFilter, JWTAuntheticationFIlter.class) // validate token filter
        .addFilterAfter(jwtRefreshFilter, JWTValidationFilter.class);

    // validate token filter
    // .addFilterAfter(jwtRefreshFilter, JwtValidationFilter.class); // refresh
    // token filter
    return http.build();
  }

  @Bean
  public AuthenticationManager authenticationManager() {
    return new ProviderManager(Arrays.asList(
        daoAuthenticationProvider(),
        jwtAuthenticationProvider()));
  }

}
