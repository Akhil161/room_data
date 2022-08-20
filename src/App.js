
import './App.css';
import Login from './component/Login';
import Planselect from './component/Planselect';
import RoomHome from './component/RoomHome';
import Summary from './component/Summary';
import Getstarted from './component/Getstarted';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    
     <div className='font-face-gm'>
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route index element={<Login />} />
        <Route path="plan" element={<Planselect />} />
        <Route path="get" element={<Getstarted />} />
        
        <Route path="room" element={<RoomHome />} />
        <Route path="room/summary" element={<Summary />} />

         
      
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
