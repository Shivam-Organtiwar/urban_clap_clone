package com.operative.springBackend.controller;

import com.operative.springBackend.model.ServiceList;
import com.operative.springBackend.model.User;
import com.operative.springBackend.service.RegistrationService;
import com.operative.springBackend.service.ServiceListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;


@RestController
public class RegistrationController {

    @Autowired
    private RegistrationService regService;
    @Autowired
    private ServiceListService serviceListService;


    @PostMapping("/areaList")
    @CrossOrigin(origins = "http://localhost:4200")
    public List<ServiceList> exportAreaList(@RequestBody String areaCheck){
        List<ServiceList> serList = new ArrayList<>();
//        String areaCheck = serviceList.getArea();
        serList = serviceListService.exportAreaList(areaCheck);
        return serList;
    }




    @GetMapping("/listOfServiceProviders")
    @CrossOrigin(origins = "http://localhost:4200")
    public List<ServiceList> exportList(){
        List<ServiceList> serList = new ArrayList<>();
        serList = serviceListService.exportList();
        return serList;
    }



    @PostMapping("/serviceProvidersList")
    @CrossOrigin(origins = "http://localhost:4200")
    public ServiceList addServices(@RequestBody ServiceList serviceList){
        ServiceList serListObj = null;
        serListObj = serviceListService.saveServices(serviceList);
        return serListObj;
    }



    @PostMapping("/register")
    @CrossOrigin(origins = "http://localhost:4200")
    public User registerUser(@RequestBody User user) throws Exception {

        String checkEmailID = user.getEmailID();
        if(checkEmailID != null && !"".equals(checkEmailID)){
            User userObj = regService.fetchUserEmailID(checkEmailID);
            if(userObj != null){
                throw new Exception(checkEmailID + "Already Exists!");
            }
        }



        User userObj = null;
        userObj = regService.saveUser(user);
        return userObj;
    }

    @PostMapping("/login")
    @CrossOrigin(origins = "http://localhost:4200")
    public User logIn(@RequestBody User user) throws Exception {

        String checkEmailId = user.getEmailID();
        String checkPassword = user.getPassword();
        User userObj = null;

        if(checkEmailId != null && checkPassword != null){
            userObj = regService.fetchUserEmailIDAndPassword(checkEmailId,checkPassword);
        }

        if(userObj == null){
            throw new Exception("Incorrect Email/Password or User Does Not Exist");
        }
        return userObj;
    }
}
