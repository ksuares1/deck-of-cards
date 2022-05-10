import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Game from './components/Game';
function App() {
  return (
    <>
     <Router>
       <Switch>
         <Route exact path="/" component={Home} />
         <Route path ="/game" component={Game} />
         {/* <Redirect  to ="/" /> */}
       </Switch>

     </Router>
     </>
       
    
  );
}

export default App;
