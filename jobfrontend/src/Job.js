import React, {Component} from 'react';
import JobEditForm from './JobEditForm';
class Job extends Component{
  render(){
    return (
      <div>
          <p>{this.props.jobTitle}</p>
          <p>{this.props.companyName}</p>
          <p>{this.props.locations}</p>
          <p>{this.props.salary}</p>
          <JobEditForm editJob={this.props.editJob} courseId={this.props.id} index={this.props.index}/>

      </div>
        )
    }
  }

export default Job;
