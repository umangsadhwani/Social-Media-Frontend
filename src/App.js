
import { Routes, Route } from "react-router-dom"
import "./App.css"
import Auth from "./pages/Auth/Auth";
import Home from "./pages/home/Home"
import Profile from "./pages/Profile/Profile";
import Setting from "./pages/Setting/Setting";
function App() {
  return (
    <div className="App">
      {/* <div className="blur" style={{top: '-18%',right: '0'}}></div>
      <div className="blur" style={{top: '36%',left: '-8rem' }}></div> */}

      <Routes>
        <Route path="/Home" element={ <Home/> } />
        <Route path="/" element={ <Auth/> } />
        <Route path="/signUp" element={ <Auth/> } />
        <Route path="Profile" element={ <Profile/> } />
        <Route path="Setting" element={ <Setting/> } />
        
      </Routes>
      {/* <Home/> */}
      {/* <Profile/> */}
      {/* <Auth/> */}
    </div>
  );
}

export default App;
