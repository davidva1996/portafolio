import Aboout from "./components/Aboout";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import WhatsappButton from "./components/whatssapButton"

function App() {
  return (
    <div>
     <Navbar/>
     <Home/>
     <Aboout/>
     <Skills/>
     <Work/>
     <WhatsappButton />
     <Contact/>
    </div>
  );
}

export default App;
