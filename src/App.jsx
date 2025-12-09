import Chat from "./components/Chat";
import Dashboard from "./components/Debounce";
import FastRef from "./components/FastRef";
import IsRefRendering from "./components/IsRefRendering";
import StopWatch from "./components/StopWatch";
import Toggle from "./components/Toggle";

const App = () => {
  return (
    <div>
      <h2 style={{textAlign: "center"}}>Referencing Values with Refs</h2>
      <hr />
      <Dashboard />
      {/* <Toggle /> */}
      <hr />
      {/* <Chat /> */}
      <hr />
      {/* <IsRefRendering />
      <hr />
      <FastRef />
      <hr />
      <StopWatch />
      <hr /> */}
    </div>
  );
};

export default App;