import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Input from "./pages/Input";
import Overview from "./pages/Overview";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Input />} />
          <Route path="/overview" element={<Overview />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;