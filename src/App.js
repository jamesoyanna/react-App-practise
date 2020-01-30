import React from 'react';
//import logo from './logo.svg';
//import Footer from "../src/components/Footer";
//import Header from "../src/components/Header";
//import NavBar from "../src/components/NavBar";
//import TodoItem from "../src/components/TodoItem"
import ContactCards from "../src/components/ContactCards";

import './App.css';

function App() {
  return (
    <div className="contacts">
      <ContactCards
        name="Jagun Solomon"
        imgUrl="https://bit.ly/2GAX1JY"
        phone="08069254939"
        email="engrjayt200@gmail.com"
        alt="new"
      />
      <ContactCards
        name="Kelvin Samba"
        imgUrl="https://bit.ly/2GAX1JY"
        phone="080456789220"
        email="dotkelplus@gmail.com"
      />
      <ContactCards />
      <ContactCards />
    </div>
  );
}

export default App;
