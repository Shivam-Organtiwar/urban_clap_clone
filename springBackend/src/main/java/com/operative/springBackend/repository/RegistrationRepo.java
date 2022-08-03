package com.operative.springBackend.repository;

import com.operative.springBackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;


public interface RegistrationRepo extends JpaRepository<User, Integer> {

    public User findByEmailID(String emailID);
    public User findByEmailIDAndPassword(String emailID, String password);
}
