import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/Home'

export class App extends Component {
  render() {
    return (  
      <div>
        <Router>
             <Route exact path="/" component={Home} />
        </Router>
      </div>
    )
  }
}

export default App
