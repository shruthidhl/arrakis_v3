package com.db.grad.javaapi.controller;

import com.db.grad.javaapi.model.Security;
import com.db.grad.javaapi.service.SecurityHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/securities")
@CrossOrigin(origins = "http://localhost:3000")
public class SecurityController {

    @Autowired
    private SecurityHandler securityService;

    @GetMapping()
    public ResponseEntity<List<Security>> getAllSecurities() {
        return new ResponseEntity<>(securityService.getAllSecurities(), HttpStatus.OK);
    }

    @PostMapping("/maturity")
    public ResponseEntity<List<Security>> getSecuritiesByMaturityDate(@RequestBody Date date){
        List<Security> datesList = securityService.getSecuritiesByMaturityDate(date);
        return new ResponseEntity<>(datesList, HttpStatus.OK);
    }

//    @PostMapping("/user")
//    public ResponseEntity<List<Security>> getSecuritiesByUserId(@RequestBody String email){
//        List<Security> securities = securityService.getSecuritiesByUserEmail(email);
//        return new ResponseEntity<>(securities, HttpStatus.OK);
//    }

    @PostMapping("/isinOrCusip")
    public ResponseEntity<List<Security>> findByIsinOrCusip(@RequestBody Map<String,String> data){
        List<Security> securities = securityService.findByIsinOrCusip(data.get("isin"), data.get("cusip"));
        return new ResponseEntity<>(securities, HttpStatus.OK);
    }

    @PostMapping("/counterparty")
    public ResponseEntity<List<String>> searchForCounterParty(@RequestBody Map<String,String> data){
        List<String> counterParty = securityService.searchForCounterParty(data.get("isin"));
        return new ResponseEntity<>(counterParty, HttpStatus.OK);
    }

    @PostMapping("/mybonds")
    public ResponseEntity<List<Security>> getMyBonds(@RequestBody Map<String,String> data){
        List<Security> securities = securityService.getMyBonds(data.get("email"), data.get("bookName"));
        return new ResponseEntity<>(securities, HttpStatus.OK);
    }


}
