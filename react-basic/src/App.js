import logo from './logo.svg';
import './App.css';

import Hello from './components/Hello';
import Start from './components/Start';
import Start from './components/HelloProps';
import Start from './components/HelloProps2';
import Start from './components/StartProps';
import StartProps from './components/StartProps';
import StartProps from './components/Counter';
import Counter from './components/Counter';







function App() {
  return (
    <div className="App">
      <h1>React</h1>
      <div>Hello React world</div>
      <hr />

      <Hello />
      <Hello />
      <Hello />
      <hr />

      <Start />
      <hr />
      <HelloProps name="홍길동" age="30" />
      <HelloProps name="짱구" age="3230" />

      <hr />
      <HelloProps2 name="홍길동" age="30" />


      <hr />
      <StartProps name="홍킬동"></StartProps>

      <hr />
      <Counter></Counter>


    </div>
  );
}

export default App;
