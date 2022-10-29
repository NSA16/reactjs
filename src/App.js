import React from 'react';
import logo from './logo.svg';
import './App.css';
import './User.js';
import User from './User';
import Board from './board';
import Header from './Header';
import Footer from './Footer';
import Forms from './Forms';

function App() {
  return (
    <div>
      <Header tXt="Ding and Bato!"/>
      <div className="">
        <User/>
        <p>Display?</p>
      </div>
      <div>
        <Forms/>
      </div>
      <div>
          <Board/>
      </div>
      <Footer sMs="Hello Props ni Darna - sa likod ng mga tala"/>
    </div>
  );
}

export default App;
