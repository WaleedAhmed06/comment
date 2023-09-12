import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Addproject from "../addproject";
import Home from "../home";

function AppRoute() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addproject" element={<Addproject />} />
        <Route path="/addproject/:id" element={<Addproject />} />
      </Routes>
    </Router>
  );
}

export default AppRoute;  
