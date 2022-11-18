import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import TaskListComponent from './components/container/Contact_list';
import Clock from './components/sesiones 4 5 y 6/ClockClassComponent';
import ClockFunctionComponent from './components/sesiones 4 5 y 6/ClockFunctionComponent';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header>
        <TaskListComponent></TaskListComponent>
        {/*</Clock>*/}
        <ClockFunctionComponent/>
      </header>
    </div>
  );
}

export default App;
