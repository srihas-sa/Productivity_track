package com.example.demo.Exception;

import java.util.HashMap;
import java.util.Map;

import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import jakarta.validation.ConstraintViolationException;

@RestControllerAdvice

public class GlobalExceptionManager {
  @ExceptionHandler(MethodArgumentNotValidException.class)
  public Map<String,String> getMethodArgumentNotValidException(MethodArgumentNotValidException me){
    Map<String,String> ss=new HashMap<>();
    me.getBindingResult().getAllErrors().forEach(err-> {
      String s1=((FieldError)err).getField();
      String s2=err.getDefaultMessage();
      ss.put(s1,s2);

    });
    System.out.println(me.getMessage()+"This nfwfnwfnf wnfwfj sriahs ");
    return ss;
  }
}
