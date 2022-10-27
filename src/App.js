import logo from './logo.svg';
import './App.css';
import './User.js';
import User from './User';
import Board from './board';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Header/>
      <div className="">
        <User/>
        <p>Display?</p>
      </div>
      <div>
          <Board/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
