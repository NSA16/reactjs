import logo from './logo.svg';
import './App.css';
const greetMo = ['Greetings Earthlings'];
const names = ['James', 'Rowen', 'Jessie', 'Tims', 'Maki', 'Eunice', 'Mark'];
const nameList = names.map ((names) => <li>{names}</li>);

const vehicles = ["mustang", "F-150", "Expedition"];
const [car,truck,suv]= vehicles;

let set1 = [1,2];
let set2 = [3,4];
let combi = [...set1,...set2].map((number) => <div>{number}</div>);

function App() {
  return (
    <div className="">
      <h1>{greetMo}</h1>
      <ul>
        {nameList}
      </ul>

    <p>
      {car}, {truck}, {suv}
    </p>
    <p>{combi}</p>
    </div>
  );
}

export default App;
