import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import {ThemeProvider} from './context/ThemeContext'

function App() {
  return (
    <div>
    <ThemeProvider>

      <Navbar/>
      <Hero/>
      
    </ThemeProvider> 
    </div>
  )
}

export default App;
