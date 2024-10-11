import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import HowItWorks from "./components/HowItWorks";
import Tokenomics from "./components/Tokenomics";
import "./App.css"; // Main CSS file
import Hero from "./components/Hero";
import CryptoList from "./components/CryptoList";
import Footer from "./components/Footer";
import CreateContractPage from "./components/CreateContractPage"; // Import the new page
import { WalletProvider } from "./context/WalletContext.jsx";

function App() {
  return (
    <WalletProvider>
      <div id="top"></div>
      <Router basename="/crypto_do">
        <div className="App">
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <About />
                  <HowItWorks />
                  <CryptoList />
                  <Tokenomics />
                </>
              }
            />
            <Route path="/create-contract" element={<CreateContractPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </WalletProvider>
  );
}

export default App;
