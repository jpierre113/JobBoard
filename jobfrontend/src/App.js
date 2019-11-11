import React, {Component} from 'react';

import './App.css';

import './JobPosts';

class App extends Component {

  constructor(props){
    super(props);

    }
    async componentDidMount() {
        try {
            const response = await fetch('http://localhost:8081/job/list')
            const data = await response.json()
            this.setState({
            courses: data,
             })
        } catch (error) {
            console.log('Error retrieving courses!')
            console.log(error)
        }
    }

      render() {
        return (
          <div>
            <JobPosts/>
          </div>
        )
  }

}

export default App;
