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
        contact={{
          name: "Felica",
          email: "met@gmail.com",
          phone: "08069254939",
          imgUrl: "https://bit.ly/2GAX1JY",
          alt: "new"
        }}
      />
      <ContactCards
        contact={{
          name: "Agatha Menda",
          email: "agta@yahoo.com",
          phone: "05969254939",
          imgUrl: "https://bit.ly/2GAX1JY",
          alt: "new"
        }}
      />
    </div>
  );
}

export default App;
