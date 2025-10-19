package com.example.demo.AuthFilter;

//import com.conceptandcoding.learningspringboot.JWT.dto.LoginRequest;
//import com.conceptandcoding.learningspringboot.JWT.util.JWTUtil;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationServiceException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.filter.OncePerRequestFilter;
import org.springframework.web.util.ContentCachingRequestWrapper;

import java.io.IOException;

public class JWTAuntheticationFIlter extends OncePerRequestFilter {
    private final AuthenticationManager authenticationManager;
    private final String secretKey = "your-secret-key"; // Replace with actual secret
    private JWTUtil jwtUtil;

    public JWTAuntheticationFIlter(AuthenticationManager authenticationManager, JWTUtil jwtUtil) {
        this.authenticationManager = authenticationManager;
        this.jwtUtil = jwtUtil;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request,
            HttpServletResponse response,
            FilterChain filterChain)
            throws ServletException, IOException {
        HttpServletRequest requestCache = new ContentCachingRequestWrapper(request);

        String path = request.getServletPath();
        if (!path.equals("/api/login")) {

            filterChain.doFilter(request, response);
            return;
        }
        System.out.println("In JWT Authentication Filter");
        ObjectMapper mapper = new ObjectMapper();
        System.out.println("Login request path: " + request.getServletPath());
        System.out.println("Request Content-Type: " + request.getContentType());
        System.out.println("Request Length: " + request.getContentLength());

        LoginRequest21 loginRequest = mapper.readValue(requestCache.getInputStream(), LoginRequest21.class);
        String username = loginRequest.getEmail();
        String password = loginRequest.getPassword(); // You might want to validate this password as well
        System.out.println("Username: " + username + ", Password: " + password);
        UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(username,
                password);
        Authentication authResult = authenticationManager.authenticate(authentication);
        System.out.println("Username: " + username + ", Password: " + password + ", Authenticated: "
                + authResult.isAuthenticated());
        if (authResult.isAuthenticated()) {
            String token = jwtUtil.generateToken(authResult.getName(), 15); // 15min
            response.setHeader("Authorization", "Bearer " + token);

            String refreshToken = jwtUtil.generateToken(authResult.getName(), 7 * 24 * 60); // 7day
            // Set Refresh Token in HttpOnly Cookie
            // we can also send it in response body but then client has to store it in local
            // storage or in-memory
            Cookie refreshCookie = new Cookie("refreshToken", refreshToken);
            refreshCookie.setHttpOnly(true); // prevent javascript from accessing it
            refreshCookie.setSecure(true); // sent only over HTTPS
            refreshCookie.setPath("/refresh-token"); // Cookie available only for refresh endpoint
            refreshCookie.setMaxAge(7 * 24 * 60 * 60); // 7 days expiry
            response.addCookie(refreshCookie);
            response.setContentType("application/json");
            response.getWriter().write("{\"accessToken\":\"" + token + "\"}");
            response.setStatus(HttpServletResponse.SC_OK); // 200
            response.getWriter().flush(); // make sure it's sent
            System.out.println(response);
            return;
        }

    }
}
