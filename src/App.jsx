import Headers from "./components/Header/Header.jsx";
import './App.css'
import Hero from "./components/Hero/Hero.jsx";
import ServicePage from "./components/ServicePage/ServicePage.jsx";

function App() {

  return (
    <div className="app">
      <Headers/>
      <Hero/>
      <ServicePage/>
    </div>  
  )
}

export default App
