package com.db.grad.javaapi.repository;

import com.db.grad.javaapi.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookRepository extends JpaRepository<Book, Integer>
{

    @Query(nativeQuery = true, value = "SELECT * FROM books b, Book_User bu, users u\n" +
            "WHERE b.id = bu.book_id AND bu.user_id = u.id\n " +
            "AND u.email like :email")
    List<Book> searchByUserEmail(String email);
}
