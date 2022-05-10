import './App.css';
import React from 'react';
// import { BrowserRouter as Router, Route } from "react-router-dom";
import WelcomeComponent from './components/Welcome.js';

function App() {
  return (
   <div>
     {/* <Router>
       <div>
         <Route exact path="/" component={WelcomeComponent}/>
       </div>
     </Router> */}
     <WelcomeComponent/>
   </div>
  
        
       
    
  );
}

export default App;
