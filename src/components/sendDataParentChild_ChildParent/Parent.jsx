import { useCallback, useState } from "react";
import Child from "./Child";
import Decrement from "./Decrement";
 const Parent=()=> {
  const [count, setCount] = useState(0);

  const decrementEvent=useCallback((count)=>{
    setCount(prev=>prev-1);
  });
  const incrementEvent=useCallback((count)=>{
    setCount(prev=>prev+1);
  });
  const obj={
      count,decrementEvent,incrementEvent
  }
  console.log("parent");
  return (
    <div className="main-parent text-center">
        <h3>Feature Pass data parent to child</h3>
        <h3>Feature Pass data child to parent</h3>
        <h3>Feature Function and class base component Example </h3>
        <h3>useCall back hook </h3>
       <Decrement {...obj} />
      
      
      {/* // child component re render when isDivisible state changes (check on console) */}
      <Child isDivisible={count % 5 === 0 ? "true" : "false"} />
    </div>
  );
}
export default Parent;