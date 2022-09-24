import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import {Create, Home, Event} from './components';

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route path="/event" element={<Event/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
