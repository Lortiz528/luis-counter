import { useState, useEffect } from 'react';
import './App.css';

function AppHooks() {
  //useState returns 2 items: a 'getter', and a "setter"
  const [count, setCount] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = () => {
    console.log('when this callback was created, count was', count);
    setWidth(window.innerWidth);
  };

  //   for (let i=0; i<5; i++){
  //     //cant call a hook here!
  //   }
  //   const [counter2, setCounter2] = useState(9);
  //   const [counts, setCounts] = useState({ count1: 10, count2: 9 });
  //   console.log('heres what useState returns', something);

  //useEffect schedules side-effectful code to run after each render
  //this is used for fetching API data and setting upp subscriptions or event listeners
  //second argument is an array of values the useEffect CB will only run after a rerun where one of these values has changed.

  useEffect(() => {
      //this is an effect that will run after the component is rendered
      window.addEventListener('resize', handleResize);
      return () => {
        //this is the cleanup function that will run just before the next time this effect is run.
        console.log('cleaning up the old event listeners');
        window.removeEventListener('resize', handleResize);
      };
    },
    [
      /*/  the effect will only run after renders where on these values changes */
    ]
  );

  //boilerplate code that works like componentDidMount
  useEffect(()=> {}, [])

  return (
    <div>
      <h1>Counter App</h1>
      <h2>{count}</h2>

      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>

      <h2>Width: {width}</h2>
    </div>
  );
}

export default AppHooks;
