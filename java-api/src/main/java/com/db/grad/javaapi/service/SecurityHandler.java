package com.db.grad.javaapi.service;

import com.db.grad.javaapi.model.Security;
import com.db.grad.javaapi.repository.BookRepository;
import com.db.grad.javaapi.repository.BookUserRepository;
import com.db.grad.javaapi.repository.SecurityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class SecurityHandler {

    @Autowired
    private SecurityRepository securityRepository;

    @Autowired
    private BookRepository bookRepository;

    @Autowired
    private BookUserRepository bookUserRepository;

    public List<Security> getAllSecurities(){
        return securityRepository.findAll();
    }

    public boolean isBusinessDay(Date date){
        return date.getDay() != 6 && date.getDay() != 0;
    }

    public List<Security> getSecuritiesByMaturityDate(Date date){
        List<Security> securities = securityRepository.findByMaturityDateNear(date);
        return securities;
    }

//    // given an user_id, return all securities that are in the user's books
//    public List<Security> getSecuritiesByUserEmail(String email){
//        List<Security> securities = securityRepository.findByUserEmail(email);
//        return securities;
//    }

    public List<Security> findByIsinOrCusip(String isin, String cusip){
        if(isin.isBlank() || cusip.isBlank())
            return securityRepository.findByIsinOrCusip(isin,cusip);
        return securityRepository.findByIsinAndCusip(isin,cusip);
    }

    public List<String> searchForCounterParty(String isin){
        return securityRepository.searchForCounterParty(isin);
    }

    public List<Security> getMyBonds(String email, String bookName){
        return securityRepository.searchByUserEmailAndBookName(email, bookName);
    }
}
