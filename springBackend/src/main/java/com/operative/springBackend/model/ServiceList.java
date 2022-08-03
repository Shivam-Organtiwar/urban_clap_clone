package com.operative.springBackend.model;
import javax.persistence.*;


@Entity
@Table(name="ServiceList")
public class ServiceList {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String category;
    private String description;
    private int price;
    private String area;
    private String name;
    private int contactNumber;


    public ServiceList(){

    }

    public ServiceList(int id, String category, String description, int price, String area, String name, int contactNumber){
        this.id = id;
        this.category = category;
        this.description = description;
        this.price = price;
        this.area = area;
        this.name = name;
        this.contactNumber = contactNumber;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public String getArea() {
        return area;
    }

    public void setArea(String area) {
        this.area = area;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getContactNumber() {
        return contactNumber;
    }

    public void setContactNumber(int contactNumber) {
        this.contactNumber = contactNumber;
    }
}
