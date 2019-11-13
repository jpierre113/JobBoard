import React, {Component} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

import JobForm from './JobForm';
import Home from './Home';
import JobList from './JobList';


class App extends Component {
  constructor(props){
    super(props);

    }
    async componentDidMount() {
        try {
            const response = await fetch('http://localhost:8081/job/list')
            const data = await response.json()
            this.setState({
            jobs: data,
             })
        } catch (error) {
            console.log('Error retrieving jobs!')
            console.log(error)
        }
    }

  render(){
  return (
    <div className="App">

    <Router>
        <div>
          <nav>
            <Link to="/" className="link">Home</Link>{Home}
            <Link to="/jobform" className="link">Post a Job</Link>{JobForm}
            <Link to="/joblist" className="link">Job Board</Link>{JobList}
          </nav>
            <Route exact path="/" component={Home} />
            <Route exact path="/jobform" component={JobForm}/>
            <Route exact path="/joblist" component={JobList}/>

        </div>
      </Router>


    </div>
    );

  }
}


export default App;
