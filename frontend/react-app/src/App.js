
import './App.css';
import { Footer } from './Components/Footer/Footer';
import { MyCommunity } from './Components/MyCommuinty/MyCommunity';
import { NavBar } from './Components/NavBar/NavBar';
import { Routes, Route } from "react-router-dom";
import { RoadMap } from './Components/RoadMap/RoadMap';
import { JoinCommunity } from './Components/JoinCommuinty/JoinCommunity';
import { Main } from './Components/Main/Main';
import { Register } from './Components/Register/Register';
import { Login } from './Components/Login/Login';
import { Profile } from './Components/Profile/Profile';

function App() {
  return (
    <div className="App">
      <NavBar/>
      
      <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path="/navbar" element={<NavBar />} />
      <Route path="/footer" element={<Footer/>}/>
      <Route path='/roadmap' element={<RoadMap/>}/>
      <Route path='/mycommunity' element={<MyCommunity/>}/>
      <Route path='/joincommunity' element={<JoinCommunity/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/profile' element={<Profile/>}/>

      </Routes>
      <Footer/>
    </div>

  );
}

export default App;
