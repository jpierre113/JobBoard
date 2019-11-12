import React, {Component} from 'react';

import './App.css';

import './JobPosts';

class App extends Component {
  render(){
  return (
    <div className="App">

    <Router>
        <div>
          <nav>
            <Link to="/" className="link">Signup / Login</Link>{' '}
            <Link to="/jobposts" className="link">Post a Job</Link>{JobPosts}

          </nav>
            <Route exact path="/" <JobPosts />
              </div>
            } />
            <Route path="/jobposts" component={JobPosts} />

        </div>
      </Router>


    </div>
    );

  }



export default App;
