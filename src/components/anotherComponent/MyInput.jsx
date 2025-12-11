import React, { useImperativeHandle, useRef } from 'react';

const MyInput = ({ref}) => {
    const myRef = useRef(null)
    useImperativeHandle(ref, ()=>({
        focus(){
            myRef.current.focus()
        }
    }))
    return (
        <input ref={myRef} type="text" />
    );
};

export default MyInput;