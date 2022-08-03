package com.operative.springBackend.service;

import com.operative.springBackend.model.ServiceList;
import com.operative.springBackend.repository.ServiceListRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class ServiceListService {

    @Autowired
    private ServiceListRepository serRepo;

    public ServiceList saveServices(ServiceList serviceList){

        return serRepo.save(serviceList);
    }

    public List<ServiceList> exportList(){
        return serRepo.findAll();
    }

    public List<ServiceList> exportAreaList(String area){
        return serRepo.findByArea(area);
    }

}
