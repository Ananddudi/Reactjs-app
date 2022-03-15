import React, { useState } from "react";
import {useApi} from "./contextapi";
import {SignIn} from "./signinforms";
import {LogIn} from './login';
import {BrowserRouter as Router,Routes,Route,Switch,Link} from 'react-router-dom';
import Home from './home';
import {About} from './about';
import {Contact} from './contactus';


function App() {
  const [log_in,setLog_in] = useState(false)
  const {apiis} = useApi();

  return (
    <>
      <Router>
      <header className="w-screen h-24 bg-black text-white">
        <img src="https://stablecoin.co.in/wp-content/uploads/2021/12/logo.png" alt="Stable Coin" className="h-20 w-24 ml-48 absolute"/>
        <div className="absolute ml-96 pl-64 pt-6">
        <Link className="p-3 hover:underline underline-offset-8" to="/">Home</Link>
        <button className="p-3 hover:underline underline-offset-8">Help</button>
        <Link className="p-3 hover:underline underline-offset-8" to="/about">About Us</Link>
        <Link className="p-3 hover:underline underline-offset-8" to="/contact">Contact Us</Link>
        <button className="p-3 hover:underline underline-offset-8" >Call</button>
        <button className="p-3 hover:underline underline-offset-8">App</button>
        <Link className="p-3 hover:underline underline-offset-8" to="login">Login</Link>
        <Link className="p-3 border-solid border-2 rounded-xl hover:bg-green-600" to="signin">Register</Link>
        </div>
      </header>
      <section>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/login" element={<LogIn/>}/>
      <Route path="/signin" element={<SignIn/>}/>
    </Routes>
    </section>
    </Router>
    </>
  );
}

export default App;
