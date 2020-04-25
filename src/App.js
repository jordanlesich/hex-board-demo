import React, {useState} from 'react';
import Hex from './Hex'
import styled from 'styled-components';


const GameStyleWrapper = styled.div`

  
  background-color: teal;
  
  .board{
    margin: auto;
    padding: 2rem;
  }
  
  [class*='hex-row']{
    clear: left;
  }
  .hex-row-1{
   margin-left: 106px;
  }
  .hex-row-2{
    margin-left: 53px;
  }
  .hex-row-4{
    margin-left: 53px
  }
  .hex-row-5{
    margin-left: 106px
  }

`
  
const App = ()=>{


  const colors = [
    '#ffe3c0'
  ]

  const genColor = () => {
    
  }

  return (
    <GameStyleWrapper>
      <div className='board'>
        <div className='hex-row-1'>
          <Hex />
          <Hex />
          <Hex />
        </div>
        <div className='hex-row-2'>
          <Hex />
          <Hex />
          <Hex />
          <Hex />
        </div>
        <div className='hex-row-3'>
          <Hex />
          <Hex />
          <Hex />
          <Hex />
          <Hex />
        </div>
        <div className='hex-row-4'>
          <Hex />
          <Hex />
          <Hex />
          <Hex />
        </div>
        <div className='hex-row-5'>
          <Hex />
          <Hex />
          <Hex />
        </div>
      </div>
    </GameStyleWrapper>
  );
  }

export default App;
