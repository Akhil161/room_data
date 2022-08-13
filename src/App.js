
import './App.css';
import Login from './component/Login';
import Planselect from './component/Planselect';
import AddRoom from './component/AddRoom';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    

        <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route index element={<Login />} />
        <Route path="plan" element={<Planselect />} />
        <Route path="add" element={<AddRoom />} />
         
      
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
