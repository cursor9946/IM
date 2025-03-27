package com.inventory.management.controller;

import org.springframework.web.bind.annotation.GetMapping;

public interface controll {
    
    @GetMapping(path="hiii")
    String  hiii();
}
