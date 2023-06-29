import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Button from './components/Button';

const App = () => {
  const [arrValues, setArrValues] = useState([]);
  const [selected, setSelected] = useState('');

  const handlePush = () => {
    if (selected === '') {
      return;
    }
    let tempArray = [...arrValues];
    tempArray.push(tempArray.length + 1);
    setArrValues(tempArray);
  }

  const handlePop = () => {
    if (selected === '') {
      return;
    }
    if (selected === 'stack') {
      let tempArray = [...arrValues];
      tempArray.pop();
      setArrValues(tempArray);
    } else {
      let tempArray = [...arrValues];
      tempArray.shift();
      setArrValues(tempArray);
    }
  }

  return (
    <div className='mainContainer'>
      <div className='leftSide'>
        <div className='modeOption'>
          <Header header='Select Mode' />
          <div className='btnContainer'>
            <Button text='Stack' style={{ backgroundColor: selected === "stack" && "#3D9970" }} handleClick={() => setSelected('stack')} />
            <p className='or'>or</p>
            <Button text='Queue' style={{ backgroundColor: selected === "queue" && "#3D9970" }} handleClick={() => setSelected('queue')} />
          </div>
        </div>
        <div className='modeOption'>
          <Header header='Select Operation' />
          <div className='btnContainer'>
            <Button text='Push' handleClick={handlePush} />
            <p className='or'>or</p>
            <Button text='pop' handleClick={handlePop} />
          </div>
        </div>
      </div>
      <div className='stackQueue'>
        {arrValues.map((val) => {
          return <div className='part'>{val}</div>
        })}
      </div>
    </div>
  )
}

export default App;