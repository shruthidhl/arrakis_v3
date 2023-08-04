package com.db.grad.javaapi.service;

import com.db.grad.javaapi.model.Security;
import com.db.grad.javaapi.repository.SecurityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SecurityHandler {

    @Autowired
    private SecurityRepository securityRepository;

    public List<Security> getAllSecurities(){
        return securityRepository.findAll();
    }
}
