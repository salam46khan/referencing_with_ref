import FastRef from "./components/FastRef";
import IsRefRendering from "./components/IsRefRendering";
import StopWatch from "./components/StopWatch";

const App = () => {
  return (
    <div>
      <h2 style={{textAlign: "center"}}>Referencing Values with Refs</h2>
      <hr />
      <IsRefRendering />
      <hr />
      <FastRef />
      <hr />
      <StopWatch />
      <hr />
    </div>
  );
};

export default App;