import TopBar from "./components/topbar/TopBar";
import Home from "./pages/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";


function App() {
  const user = true;
  return (
    <Router>
    <TopBar/>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/post/:postId" element={<Single/>}/>
      <Route path="/write" element={user?<Write/>:<Home/>}/>
      <Route path="/setting" element={<Settings/>}/>
    </Routes>
    
    </Router>
  );
}

export default App;
