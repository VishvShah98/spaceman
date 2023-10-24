import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Features from "./pages/Features";
import Demo from "./pages/Demo";
import ScreenShots from "./pages/ScreenShots";
import Team from "./pages/Team";
import Download from "./pages/Download";
import { useSnapshot } from "valtio";
import videoState from "./state";


function App() {

  const snapshot = useSnapshot(videoState);

  return (
    <div style={{ display: snapshot.isVideoLoaded ? "block" : "none" }}>
      <Navbar />
      <HomePage />
      <About />
      <Features />
      <Demo />
      <ScreenShots />
      <Team />
      <Download />
    </div>
  );
}

export default App;
