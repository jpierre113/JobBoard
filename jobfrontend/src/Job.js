import React, {Component} from 'react';
import CourseEditForm from './CourseEditForm';

class Job extends Component{
  render(){
    return (
      <div>
          <p>{this.props.name}</p>
          <p>{this.props.code}</p>
          <JobEditForm editJob={this.props.editJob} courseId={this.props.id} index={this.props.index}/>

      </div>
        )
    }
  }

export default Job;
