import logo from './logo.svg';
import './App.css';
import Clock from './Clock';
import Toggle from './Toggle';
import LoginControl from './LoginControl'
// import {*} from './Clock';
import {Welcome, Greeting} from "./FunctionComponents";

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div id="Clock">
        <script src="./Clock.js">
          test();
        </script>
        <Clock />
        </div>
      <div>
        <Toggle />
      </div>
      <div>
        <Welcome name="Happys4"/>
      </div>
      <div>
      <Greeting isLoggedIn={false} />
      </div>
      <div>
      <LoginControl />
      </div>
    </div>
  );
}

export default App;
