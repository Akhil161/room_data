
import './App.css';
import Login from './component/Login';
import Planselect from './component/Planselect';

import Summary from './component/Summary';
import Getstarted from './component/Getstarted';
import RoomDisplay from './component/RoomDisplay';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    
     <div className='font-face-gm'>
        <BrowserRouter>
      <Routes>
      <Route path="login"  element={<Login />} />
      <Route path="/" element={<Getstarted />}/>
        <Route index element={<Getstarted />} />
       
        <Route path="login/plan" element={<Planselect />} />
        <Route path="/login/plan/room" element={<RoomDisplay />} />
        <Route path="login/plan/room/summary" element={<Summary />} />
      
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
