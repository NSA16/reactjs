import logo from './logo.svg';
import './App.css';
import './User.js';
import User from './User';
import Board from './board'

function App() {
  return (
    <div>
      <div className="">
        <User/>
        <p>Display?</p>
      </div>
      <div>
          <Board/>
      </div>
    </div>
  );
}

export default App;
