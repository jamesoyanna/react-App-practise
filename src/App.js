import React from 'react';
//import logo from './logo.svg';
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import NavBar from "../src/components/NavBar";
import TodoItem from "../src/components/TodoItem"

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <TodoItem />
      <NavBar />
      <Footer />
    </div>
  );
}

export default App;
