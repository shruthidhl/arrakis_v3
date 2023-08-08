import React, { useState, useEffect } from 'react';
import { Accordion } from 'react-bootstrap';
import { findBooks, findBookTrades } from '../services/bond-service'
import BondDetails from './BondDetails';
import styles from './MyBonds.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from "react-router-dom";
import BondTable2 from './BondTable2';
import BondDetails2 from './BondDetails2';

export const MyBonds = (props) => {

  const [books, setBooks] = useState([]);
  const [trades, setTrades] = useState([]);
  const navigate = useNavigate();
  const handleOnClick1 = (event) => {
    //Prevent page reload

    event.preventDefault();
    navigate("/Home");

  }

  const handleOnClick2 = (event) => {
    //Prevent page reload

    event.preventDefault();
    navigate("/myBonds");

  }
  const handleAccordionItemClick = (bookName) => {
    const map = {
      "email": localStorage.getItem("email"),
      "bookName": bookName[0]
    }
    console.log(map)
    findBookTrades(map)
      .then(res => {
        setTrades(res.data);
        console.log(res.data);
      })
      .catch(err => {
        setBooks([]);
        console.log(err);
      })
  }

  useEffect(() => {
    getBooksFromAPI();
  },
    []
  )

  const getBooksFromAPI = () => {
    const map = {
      "email": localStorage.getItem("email")
    };
    findBooks(map)
      .then(res => {
        const bookList = res.data.map(item => {
          const [book_name, _] = item.split(',');
          return [ book_name];
        });
        console.log(bookList)
        setBooks(bookList);
      })
      .catch(err => {
        setBooks([]);
        console.log(err);
      })
  }


  return (
<>
    <Navbar id='nav' expand="lg" className="bg-body-tertiary">
        <Container id='nav' >
          <Navbar.Brand id='nav' href="#home">Bond Overview</Navbar.Brand>
          <Navbar.Toggle id='nav' aria-controls="basic-navbar-nav"  />
          <Navbar.Collapse  id="basic-navbar-nav" >
            <Nav className="me-auto" >
              <Nav.Link id='nav' onClick={handleOnClick1}  >All Bonds</Nav.Link>

              <Nav.Link id='nav' onClick={handleOnClick2} >My Bonds</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        
      </Navbar>
    <Accordion defaultActiveKey="0" className={styles.accordion}>
      {books.map((book) => (
        <Accordion.Item   onClick={() => handleAccordionItemClick(book)}>
          <Accordion.Header>{book}</Accordion.Header>
          <Accordion.Body>
            { trades.map((trade) => (
              <BondTable2 data={trade} />
            //   <BondDetails2 info={trade} />
            ))} 
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
    </>
  )
}

export default MyBonds;