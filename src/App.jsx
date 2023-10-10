import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Features from "./pages/Features";
import Demo from "./pages/Demo";
import ScreenShots from "./pages/ScreenShots";
import Team from "./pages/Team";
import Download from "./pages/Download";
function App() {
  return (
    <>
      <Navbar />
      <HomePage />
      <About />
      <Features />
      <Demo />
      <ScreenShots />
      <Team />
      <Download />
    </>
  );
}

export default App;
