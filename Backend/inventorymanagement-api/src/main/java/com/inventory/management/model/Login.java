package com.inventory.management.model;
import jakarta.persistence.*;

@Entity
@Table(name = "login")
public class Login {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    
    @Column(name = "item_name")
    private String itemName;
    
    // Getters and Setters
}
