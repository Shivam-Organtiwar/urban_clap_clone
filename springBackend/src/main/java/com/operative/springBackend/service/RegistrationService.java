package com.operative.springBackend.service;

import com.operative.springBackend.model.User;
import com.operative.springBackend.repository.RegistrationRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class RegistrationService {

    @Autowired
    private RegistrationRepo repo;

    public User saveUser(User user){
        return repo.save(user);
    }

    public User fetchUserEmailID(String emailID){
        return repo.findByEmailID(emailID);
    }

    public User fetchUserEmailIDAndPassword(String emailID, String password){
        return repo.findByEmailIDAndPassword(emailID, password);
    }
}
