// MODULE IMPOPRTS
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; 

// COMPONENT IMPORTS
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import Footer from "./components/Footer/Footer"


function App() {
  return (
    <div className="App">
   <Header />
   <Hero />
   <Router>
     <Switch>
     <Route exact path = "/" component = {Search} />
     <Route exact path = "/saved" component = {Saved} />
     </Switch>
   </Router>
   <Footer />
    </div>
  );
}

export default App;
