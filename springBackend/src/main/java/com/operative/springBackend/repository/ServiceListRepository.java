package com.operative.springBackend.repository;

import com.operative.springBackend.model.ServiceList;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface ServiceListRepository extends JpaRepository<ServiceList, Integer> {

    List<ServiceList> findByAreaContains(String area);

}
