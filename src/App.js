import './App.css';
import React,{useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import {Create, Home, Event} from './components';

export const Store = React.createContext();

function App() {
  const [data, setdata] = useState({
    eventName: '',
    hostName: '',
    location:'',
    startdate:'',
    endDate:''
  })

  return (
    <Store.Provider value={{data, setdata}}>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route path="/event" element={<Event/>}/>
      </Routes>
    </BrowserRouter>
    </Store.Provider>
  );
}

export default App;

