package com.operative.springBackend.model;
import javax.persistence.*;

@Entity
@Table(name="User")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String emailID;
    private String password;

    public int getId() {
        return id;
    }

    public User(){

    }

    public User(int id, String emailID, String password){
        this.id = id;
        this.emailID = emailID;
        this.password = password;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getEmailID() {
        return emailID;
    }

    public void setEmailID(String emailID) {
        this.emailID = emailID;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
