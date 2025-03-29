package com.inventory.management.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.inventory.management.model.Login;


@Repository
public interface controlDao extends JpaRepository<Login, Integer> { 

    @Query(value = "SELECT * FROM login", nativeQuery = true)
    List<Object[]> login();

}
