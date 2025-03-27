package com.inventory.management.controller.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.inventory.management.controller.controll;
import com.inventory.management.service.contrllService;
@RestController
public class controllImpl implements controll{

    @Autowired
    contrllService Service;
    @Override
    public String hiii() {
        return Service.hiii();
    }
    
}
