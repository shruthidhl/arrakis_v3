package com.db.grad.javaapi.repository;

import com.db.grad.javaapi.model.Security;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface SecurityRepository extends JpaRepository<Security, Integer>
{
    @Query(nativeQuery = true, value = "SELECT * FROM Security s WHERE s.maturity_date = :date")
    List<Security> findByMaturityDate(Date date);

    @Query(nativeQuery = true, value = "SELECT * FROM Security s WHERE DATEDIFF('DAY', :date, s.maturity_date) BETWEEN -7 AND 7")
    List<Security> findByMaturityDateNear(Date date);
//
//    // given an user_id, return all securities that are in the user's books
//    @Query(nativeQuery = true, value = "SELECT bu.book_id, s.isin, s.cusip, s.issuer_name, s.maturity_date, s.coupon, s.type, s.face_value, s.currency, s.status  FROM users u JOIN book_user bu ON u.id = bu.user_id JOIN books b ON bu.book_id = b.id JOIN trades t ON t.book_id = b.id JOIN security s ON t.security_id = s.id WHERE u.email like:email GROUP BY bu.book_id, s.isin, s.cusip, s.issuer_name, s.maturity_date, s.coupon, s.type, s.face_value")
//    List<Security> findByUserEmail(String email);

    List<Security> findByIsinOrCusip(String isin, String cusip);
    List<Security> findByIsinAndCusip(String isin, String cusip);

    @Query(nativeQuery = true, value = "SELECT DISTINCT c.name FROM" +
            " security s, trades t, counter_party c " +
            "WHERE s.id = t.security_id AND t.counter_party_id = c.id AND s.isin = :isin")
   List<String> searchForCounterParty(String isin);

    @Query(nativeQuery = true, value = " SELECT DISTINCT s.* FROM security s " +
            "JOIN trades t ON s.id = t.security_id " +
            "JOIN books b ON t.book_id = b.id " +
            "JOIN book_user bu ON b.id = bu.book_id " +
            "JOIN users u ON bu.user_id = u.id " +
            "WHERE u.email = :email AND b.book_name = :bookName")
    List<Security> searchByUserEmailAndBookName(String email, String bookName);

}
