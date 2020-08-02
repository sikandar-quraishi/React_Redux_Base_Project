import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/Home'
import SubHome from './components/SubHome'
import Details from './components/details'

export class App extends Component {
  render() {
    return (
      
      <div>
        <Router>
             <Route exact path="/" component={Home} />
             <Route exact path="/subhome" component={SubHome} />
             <Route exact path="/details" component={Details} />
        </Router>
      </div>
    )
  }
}

export default App
