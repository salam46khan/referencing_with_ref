import { useState } from 'react';

export default function Toggle() {
  const [isOnRef, setIsOnRef] = useState(false);
//   const isOnRef = useRef(false);


  return (
    <button onClick={() => {
    //   isOnRef.current = !isOnRef.current;
      setIsOnRef((s)=> !s)
    }}>
      {isOnRef ? 'On' : 'Off'}
    </button>
  );
}