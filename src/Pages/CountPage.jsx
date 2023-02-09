import React, {useState} from 'react'
import Count from '../Components/Count/Count';

export default function () {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState("");

  const setValue = (event) => {
    event.preventDefault();

    setCount(number);
    setNumber("");
  };

  const decrement = (event) => {
    setCount(Number(count) - 1);
  };

  const increment = (event) => {
    setCount(Number(count) + 1);
  };

  const reset = (event) => {
    setCount(0);
  };

  return (
    <div>
      <form onSubmit={(event)=> {setValue(event)}}>
       
        <input type='text' value={number} onChange={(event)=>{setNumber(event.currentTarget.value)}}/>
        
        <button type='submit'>Add at count</button>
      </form>

      <button className='decrement' onClick={(event)=>{decrement(event)}}>- 1</button>
      <button className='reset' onClick={(event)=>{reset(event)}}>reset</button>
      <button className='increment' onClick={(event)=>{increment(event)}}>+ 1</button>

      <Count counter={count}/>

    </div>
  )
}
