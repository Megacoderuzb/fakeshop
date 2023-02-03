import { Routes, Route } from "react-router-dom";
import Redirect from "./Components/Redirect.jsx";
import Details from "./Pages/Details.jsx";
import Home from "./Pages/Home.jsx";
import Login from "./Pages/Login.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Redirect />} />
      </Routes>
    </div>
  );
}

export default App;
