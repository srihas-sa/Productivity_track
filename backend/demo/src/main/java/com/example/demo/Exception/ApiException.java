package com.example.demo.Exception;

public class ApiException extends RuntimeException {
  

  public ApiException(){}

  public ApiException(String msg){

    super(msg);
  }
}
