package com.inventory.management.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;

public interface controll {
    
    @GetMapping(path="login")
    List<Object[]>  login();
}
