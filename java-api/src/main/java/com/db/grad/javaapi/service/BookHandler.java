package com.db.grad.javaapi.service;

import com.db.grad.javaapi.model.Book;
import com.db.grad.javaapi.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BookHandler {

    @Autowired
    private BookRepository bookRepo;

    public List<Book> getAllBooks(){
        return bookRepo.findAll();
    }

    public List<String> getBooksByUserEmail(String email){
        List<String> bookNames = new ArrayList<>();
        for(Book book : bookRepo.searchByUserEmail(email)){
            bookNames.add(book.getBookName());
        }
        return bookNames;
    }

}
