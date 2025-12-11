import { useRef } from "react";
import MyInput from "./MyInput";

const ParentCompo = () => {
  const ref = useRef(null);
  const ref2 = useRef(null)
  const handleFocus = () => {
    console.log(ref.current);
    ref.current.focus();
  };

  const handleComponentFocus = () => {
    console.log(ref2.current);
    ref2.current.focus()
    ref2.current.style.background = "red"
  }
  return (
    <div>
      <div>
        <input ref={ref} type="text" />
        <button onClick={handleFocus}>Focus1</button>
      </div>
      <hr />
      <div>
        <MyInput ref={ref2} placeholder="focus 2"/>
        <button onClick={handleComponentFocus}>Focus2</button>
      </div>
    </div>
  );
};

export default ParentCompo;
