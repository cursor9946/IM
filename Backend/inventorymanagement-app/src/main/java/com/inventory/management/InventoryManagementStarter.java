package com.inventory.management;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;


import com.inventory.management.service.impl.contrllServiceimpl;

@SpringBootApplication
@EnableJpaRepositories({"com.inventory.management"})
@ComponentScan(basePackages = {"com.inventory.management"})
public class InventoryManagementStarter {
    public static void main(String[] args) {
        SpringApplication.run(InventoryManagementStarter.class, args);
       // System.out.println(new contrllServiceimpl().login());
    }
}