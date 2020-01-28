import React from 'react';
//import logo from './logo.svg';
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import NavBar from "../src/components/NavBar";
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Header />
      <NavBar />
      <Footer />
    </React.Fragment>
  );
}

export default App;
