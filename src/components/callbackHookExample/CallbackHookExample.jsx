import { useCallback, useState } from "react";

const CallbackHookExample=()=>{
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(0);

    const incrementEvent=useCallback(()=>{
        setCount(prev=>prev+1);
    });

    const decrementEvent=useCallback(()=>{
        setCount(prev=>prev-1);
    });

    return <h1>CallbackHookExample</h1>
}
export default CallbackHookExample;