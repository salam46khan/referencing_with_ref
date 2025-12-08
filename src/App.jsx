import FastRef from "./components/FastRef";
import StopWatch from "./components/StopWatch";

const App = () => {
  return (
    <div>
      <h2 style={{textAlign: "center"}}>Referencing Values with Refs</h2>
      <hr />
      <FastRef />
      <hr />
      <StopWatch />
    </div>
  );
};

export default App;