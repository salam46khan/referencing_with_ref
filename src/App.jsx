import ParentCompo from "./components/anotherComponent/ParentCompo";
import CatFriends from "./components/CatFriends";
import Chat from "./components/Chat";
import Dashboard from "./components/Debounce";
import FastRef from "./components/FastRef";
import FoursForm from "./components/FoursForm";
import IsRefRendering from "./components/IsRefRendering";
import Scroll from "./components/Scroll";
import ScrollingToView from "./components/ScrollingToView";
import StopWatch from "./components/StopWatch";
import Toggle from "./components/Toggle";
import VideoPlayer from "./components/VideoPlayer";

const App = () => {
  return (
    <div>
      <h2 style={{textAlign: "center"}}>Referencing Values with Refs</h2>
      <hr />
      <VideoPlayer />
      {/* <ParentCompo /> */}
      {/* <CatFriends /> */}
      {/* <Scroll /> */}
      {/* <ScrollingToView /> */}
      {/* <FoursForm /> */}
      {/* <Dashboard /> */}
      {/* <Toggle /> */}
      <hr />
      {/* <Chat /> */}
      {/* <hr /> */}
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