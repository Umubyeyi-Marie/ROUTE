import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Userprofile from "./components/Userprofile";
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/users/:id" element={<Userprofile />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
