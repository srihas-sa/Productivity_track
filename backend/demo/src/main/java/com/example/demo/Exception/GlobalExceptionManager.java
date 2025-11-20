package com.example.demo.Exception;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import jakarta.validation.ConstraintViolationException;

@RestControllerAdvice

public class GlobalExceptionManager {
  @ExceptionHandler(MethodArgumentNotValidException.class)
  public ResponseEntity<Map<String,String>> getMethodArgumentNotValidException(MethodArgumentNotValidException me){
    ResponseEntity resMethArgNotValid;
    Map<String,String> ss=new HashMap<>();
    me.getBindingResult().getAllErrors().forEach(err-> {
      String s1=((FieldError)err).getField();
      String s2=err.getDefaultMessage();
      ss.put(s1,s2);

    });
    System.out.println(me.getMessage()+"This nfwfnwfnf wnfwfj sriahs ");
    return new ResponseEntity<>(ss, HttpStatus.BAD_REQUEST);
  }


  @ExceptionHandler(ConstraintViolationException.class)
public ResponseEntity<Map<String, String>> handleConstraintViolation(ConstraintViolationException ex) {
    
    Map<String, String> errors = new HashMap<>();

    ex.getConstraintViolations().forEach(cv -> {
        String field = cv.getPropertyPath().toString();
        String message = cv.getMessage();
        errors.put(field, message);
    });

    return new ResponseEntity<>(errors, HttpStatus.BAD_REQUEST);
}



  @ExceptionHandler(ResourceNotFound21.class)
  public ResponseEntity<String> getResourceNotFoundException(ResourceNotFound21 me){
    //ResponseEntity resMethArgNotValid;
    me.toString();
    System.out.println(me.getMessage()+"Resource Not Found Exception! ");
    return new ResponseEntity<String>(me.getMessage(),HttpStatus.BAD_REQUEST);
  }


  @ExceptionHandler(ApiException.class)
  public ResponseEntity<String> getApiException(ApiException me){
    //ResponseEntity resMethArgNotValid;
    me.toString();
    System.out.println(me.getMessage()+"Resource Not Found Exception! ");
    return new ResponseEntity<String>(me.getMessage(),HttpStatus.BAD_REQUEST);
  }

}
