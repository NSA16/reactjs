import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import logo from './logo.svg';
import './App.css';
import './User.js';
import User from './User';
import Board from './board';
import Header from './Header';
import Footer from './Footer';
import Forms from './Forms';
import TicTactoe from './TicTactoe';
import Staff from './staffs';

function App() {
  return (
    <div>
      <Staff />
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
      <div><br/></div>
      <div>
        <TicTactoe />
      </div>
      <Footer sMs="Hello Props ni Darna - sa likod ng mga tala"/>
    </div>
  );
}

export default App;
