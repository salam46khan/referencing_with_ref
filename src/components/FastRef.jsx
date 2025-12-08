import React, { useRef } from 'react';

const FastRef = () => {
    const ref = useRef(0)
    const handleClick = () =>{
        ref.current = ref.current + 1
        console.log('click', ref.current);
        
    }
    return (
        <div>
            <button onClick={handleClick}>
                Click me!
            </button>
        </div>
    );
};

export default FastRef;