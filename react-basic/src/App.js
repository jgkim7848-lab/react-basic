//App.js
import logo from './logo.svg';
import './App.css';  //css link 같은 효과
import Hello from './components/Hello';
import Start from './components/Start';
import HelloProps from './components/HelloProps';
import HelloProps2 from './components/HelloProps2';
import StartProps from './components/StartProps';
import Counter from './components/Counter';
import InputSample from './components/InputSample';
import InputSample2 from './components/InputSample2';
import UserList from './components/user/UserList';
import UserList2 from './components/user/UserList2';




function App() {
  return (
    <div className="App">
      <h1>React~!!!</h1>
      <div>Hello React World~!!</div>

      <hr />
      <Hello />
      <Hello />

      <hr />
      <Start />

      <hr />
      <HelloProps name="홍길동" age="30" />
      <HelloProps name="짱구" age="5" />

      <hr />
      <HelloProps2 name="순이" age="20" />

      <hr />
      <StartProps name="홍길동" phone="1111" />

      <hr />
      <Counter />

      <hr />
      <InputSample />

      <hr />
      <InputSample2 />

      <hr />
      <UserList />




      <hr />
      <UserList2 />





      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />


      
    </div>
  );
}

export default App;