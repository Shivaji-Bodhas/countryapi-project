
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Country from './Components/Country';
import About from './Components/About';
import NavBar from './Components/NavBar';
import Data from './Components/Data';

function App() {
  return (
    <div className="App">
      <NavBar/>
     <Routes>
     <Route path="/Data" element={<Data></Data>}></Route>
     <Route path="/About" element={<About></About>}></Route>
     </Routes>
    </div>
  );
}

export default App;
