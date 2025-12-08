import { useState } from "react";

const StopWatch = () => {
    const [now, setNow] = useState(null)
    const [stateTime, setStateTime] = useState(null)

    const handleStart = () => {
        setNow(Date.now())
        setStateTime(Date.now())

        setInterval(() => {
            setNow(Date.now())
        }, 10);
    }
    console.log(now);
    let secondsPassed = 0;
    if(now !== null & stateTime !== null) {
        secondsPassed = (now - stateTime) / 1000
    }
    return (
        <div>
            <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
            <button onClick={handleStart}>
                Start
            </button>
        </div>
    );
};

export default StopWatch;