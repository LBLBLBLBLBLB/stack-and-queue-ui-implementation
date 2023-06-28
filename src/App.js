import React from 'react';
import './App.css';
import Header from './components/Header';
import Button from './components/Button';

const App = () => {
  return (
    <div className='mainContainer'>
      <div className='leftSide'>
        <div className='modeOption'>
          <Header header='Select Mode' />
          <div className='btnContainer'>
            <Button text='Stack' />
            <p className='or'>or</p>
            <Button text='Queue' />
          </div>
        </div>
        <div className='modeOption'>
          <Header header='Select Operation' />
          <div className='btnContainer'>
            <Button text='Push' />
            <p className='or'>or</p>
            <Button text='pop' />
          </div>
        </div>
      </div>
      <div className='stackQueue'>
        <div className='part'>1</div>
        <div className='part'>1</div>
        <div className='part'>1</div>
      </div>
    </div>
  )
}

export default App;