import { useRef } from "react";

const FoursForm = () => {
    const ref = useRef(null)
    const handleFocus = () => {
        console.log(ref.current);
        ref.current.focus()
    }
    return (
        <div>
            <input ref={ref} type="text" />
            <button onClick={handleFocus}>Fosue</button>
        </div>
    );
};

export default FoursForm;