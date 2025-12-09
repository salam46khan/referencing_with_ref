import React, { useRef, useState } from 'react';

const IsRefRendering = () => {
    const [count, setCount] = useState(0)
    const countRef = useRef(0)
    console.log(count, countRef.current);
    
    const handleCount = () => {
        
        setCount(count+1)
        console.log(count);
    }

    const handleCountRef = () => {
        countRef.current = countRef.current + 1
        
    }

    return (
        <div>
            <button onClick={handleCount}>Click state button {count}</button>
            <button onClick={handleCountRef}>Click ref button {countRef.current}</button>
        </div>
    );
};

export default IsRefRendering;