import React, {Component} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

import JobForm from './JobForm';
import Home from './Home';


class App extends Component {
  render(){
  return (
    <div className="App">

    <Router>
        <div>
          <nav>
            <Link to="/" className="link">Home</Link>{Home}
            <Link to="/jobform" className="link">Post a Job</Link>{JobForm}
          </nav>
            <Route exact path="/" component={Home} />
            <Route path="/jobform" component={JobForm}/>

        </div>
      </Router>


    </div>
    );

  }
}


export default App;
