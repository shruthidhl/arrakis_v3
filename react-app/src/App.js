import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import { Routes, Route } from "react-router-dom";
import Calendar from './components/Calendar';
import MyBonds from './components/MyBonds';

const App = () => {
  return (
    <Routes>
        <Route path = "/Home" element = {<Home />} />
        <Route path = "/" element = {<Login />} /> 
        <Route path='/filter' element ={<Calendar/>}/>
        <Route path='/myBonds' element ={<MyBonds/>}/>
    </Routes>
  );
};

export default App;