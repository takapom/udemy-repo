import { useState } from "react";
import { useReducer } from "react";

const Example = () => {
  const [state, setstate] = useState(0);
  const [rstate, dispatch] = useReducer(prev => {
    if (action === "+"){
      return ++prev;
    }else if (action === "-"){
      return --prev;
    }
  },0);
  const countup = () => {
   return setstate(prev => ++prev)
  }
  const rcountup = () => {
    dispatch('+');
  }

  const rcountdown = () => {
    dispatch('-')
  }

  return (
    <>
    <div>
    <h3>{state}</h3>
    <button onClick={countup}>+</button>
    </div>

    <div>
    <h3>{rstate}</h3>
    <button onClick={rcountup}>+</button>
    <button onClick={rcountdown}>-</button>
    </div>
    </>
  );
};

export default Example;
