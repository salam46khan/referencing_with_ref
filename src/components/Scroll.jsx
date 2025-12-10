import React, { useRef } from 'react';

const Scroll = () => {
    const ref1 = useRef(null)
    const ref2 = useRef(null)
    const ref3 = useRef(null)
    const ref4 = useRef(null)

    const handleRef1 = () => {
        ref1.current.scrollIntoView()
    }
    const handleRef2 = () => {
        ref2.current.scrollIntoView()
    }
    const handleRef3 = () => {
        ref3.current.scrollIntoView()
    }
    const handleRef4 = () => {
        ref4.current.scrollIntoView()
    }
    return (
        <div>
            <div className='box-btns'>
                <button onClick={handleRef1}>Box-1</button>
                <button onClick={handleRef2}>Box-2</button>
                <button onClick={handleRef3}>Box-3</button>
                <button onClick={handleRef4}>Box-4</button>
            </div>
            <div className='box-container'>
                <div ref={ref1} className="box box-1">
                    <p>Box-1</p>
                </div>
                <div ref={ref2} className="box box-2"><p>Box-2</p></div>
                <div ref={ref3} className="box box-3"><p>Box-3</p></div>
                <div ref={ref4} className="box box-4"><p>Box-4</p></div>
            </div>
        </div>
    );
};

export default Scroll;