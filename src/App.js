import React from 'react';
import './App.scss';
import Navbar from './component/navbar/Navbar';
import Tourlist from './component/tourlist/Tourlist';

import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from './component/tourlist/Home'
 import About from './component/tourlist/About'
 import Contact from './component/tourlist/Contact'


function App() {
  return (
    <main className="App">
      <BrowserRouter>
            <div>
                <Navbar></Navbar>
                <Switch>
                  <Route path="/" exact component={Home}/>
                  <Route path="/about"  component={About}/>
                  <Route path="/contact"  component={Contact}/>
                  <Route path="/tourlist"  component={Tourlist}/>
              </Switch>

            </div>
           </BrowserRouter>
    </main>
  );
}

export default App;
