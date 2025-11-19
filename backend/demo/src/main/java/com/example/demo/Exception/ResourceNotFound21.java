package com.example.demo.Exception;

public class ResourceNotFound21 extends RuntimeException {
  public String id;
  public String Resource;
  public String FieldName;
  public String FieldValueString;
  public long FieldValueLong;

  

  public ResourceNotFound21() {
  }

  public ResourceNotFound21(String resource, String name, long field) {
    super(String.format("%s in Not found for category:%s,for FieldId",resource,name,field));
    this.Resource = resource;
    this.FieldName = name;
    this.FieldValueLong = field;
  }

  public ResourceNotFound21(String resource, String name, String FieldValueString) {
    super(String.format("%s in Not found for category:%d,for FieldId",resource,name,FieldValueString));
    this.Resource = resource;
    this.FieldName = name;
    this.FieldValueString = FieldValueString;
  }

  public String getResource() {
    return Resource;
  }

  public void setResource(String resource) {
    Resource = resource;
  }

  public String getName() {
    return FieldName;
  }

  public void setName(String name) {
    FieldName = name;
  }

  public long getField() {
    return FieldValueLong;
  }

  public void setField(long field) {
    FieldValueLong = field;
  }

  @Override
  public String toString() {
    return "ResourceNotFound21 [id=" + id + ", Resource=" + Resource + ", FieldName=" + FieldName
        + ", FieldValueString=" + FieldValueString + ", FieldValueLong=" + FieldValueLong + "]";
  }

  


  
}
