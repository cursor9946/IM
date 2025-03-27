package com.inventory.management;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = {"com.inventory.management"})
public class InventoryManagementStarter {
    public static void main(String[] args) {
        SpringApplication.run(InventoryManagementStarter.class, args);
    }
}