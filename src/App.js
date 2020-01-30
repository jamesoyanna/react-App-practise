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
      <ContactCards />

      <div className="contact-card">
        <img
          src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="new"
        />
        <h3>Mr. Kola Aina</h3>
        <p>Phone: +2345020924</p>
        <p>Email: dotkelpus@yahoo.com</p>
      </div>
    </div>
  );
}

export default App;
