import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from './Components/header';
import Slider from './Components/slider';
import Subscriber from "./Components/subscribe";
import Services from './Components/services';
import FooterLinks from "./Components/footer";
import MainFooter from "./Components/footerEnd";
import LoginAndSignup from "./Components/loginAndSignup";


function App() {
  return (
    <div className="page">
      <Header /> 
     <Slider />
     <LoginAndSignup />
     <Subscriber />
     <Services />
     <FooterLinks />
     <MainFooter />
    </div>
  );
}
export default App;
