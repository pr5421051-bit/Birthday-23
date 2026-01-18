import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Story from "./components/Story";
import Letter from "./components/Letter";
import Surprise from "./components/Suprise";
import Final from "./components/Final";
import Popup from "./components/Popup";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Popup />
      <ScrollToTop/>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/story" element={<Story />} />
        <Route path="/letter" element={<Letter />} />
        <Route path="/surprise" element={<Surprise />} />
        <Route path="/final" element={<Final />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
