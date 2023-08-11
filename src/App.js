import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
// import Login from "./pages/Login";
import Error404 from "./pages/Error404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />}/>
          {/* <Route path="user" element={<User/>}/> */}
          <Route path="*" element={<Error404/>}/>
        </Route>
          <Route path="login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;