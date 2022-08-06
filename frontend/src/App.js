import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import homePage from "./pages/homePage";
import POSPage from "./pages/POSPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<homePage />} />
        <Route path="/pos" element={<POSPage />} />
        <Route />
      </Routes>
    </Router>
  );
}

export default App;
