import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { FirstPage } from "./Pages/FirstPage";
import { GamePage } from "./Pages/GamePage";



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<FirstPage/>} />
      <Route path="/memory" element={<GamePage/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;