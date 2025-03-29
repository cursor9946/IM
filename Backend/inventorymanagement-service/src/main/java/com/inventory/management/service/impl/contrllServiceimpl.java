package com.inventory.management.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.inventory.management.dao.controlDao;
import com.inventory.management.service.contrllService;
@Service
public class contrllServiceimpl implements contrllService{

    @Autowired 
    private controlDao c;
    @Override
    public List<Object[]> login() {
        return c.login();

    }
    
}
