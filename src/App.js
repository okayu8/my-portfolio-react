import React, { useState } from 'react';
import './App.css';
import Test1 from './components/Test1';
import Test2 from './components/Test2';

function App() {
  const [mode, changeMode] = useState('test1');
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => changeMode('test1')}>
          test1
        </button>
        <button onClick={() => changeMode('test2')}>
          test2
        </button>
        {mode === 'test1' &&
          <Test1 />}
        {mode === 'test2' &&
          <Test2 />}

      </header>
    </div>
  );
}

export default App;
