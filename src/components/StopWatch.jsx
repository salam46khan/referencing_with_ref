import { useRef, useState } from "react";

const StopWatch = () => {
    
    const [now, setNow] = useState(null)
    const [stateTime, setStateTime] = useState(null)
    let intervalRef = useRef(null)

    const handleStart = () => {
        setNow(Date.now())
        setStateTime(Date.now())

        intervalRef.current= setInterval(() => {
            setNow(Date.now())
        }, 10);
    }

    const handleStop = () => {
        clearInterval(intervalRef.current)
    }

    

    console.log(now);
    let secondsPassed = 0;
    
    if(now !== null & stateTime !== null) {
        secondsPassed = (now - stateTime) / 1000
    }
    const handleReset = () => {
        setNow(null)
        setStateTime(null)
    }
    return (
        <div>
            <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
            <button onClick={handleStart}>
                Start
            </button>
            <button onClick={handleStop}>
                Stop
            </button>
            <button onClick={handleReset}>
                Reset
            </button>

        </div>
    );
};

export default StopWatch;