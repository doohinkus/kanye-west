import './App.css';
import {Quote} from "./components/Quote";
import kanye from './images/kanye-west.png';

function App() {

  return (
    <div className="App">
      <header className="App-header">
       <img src={kanye} />
       <Quote />
      </header>
    </div>
  );
}

export default App;
