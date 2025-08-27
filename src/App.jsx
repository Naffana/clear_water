import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <React.StrictMode>
    <HelmetProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
    </HelmetProvider>
    </React.StrictMode>
  );
}

export default App;