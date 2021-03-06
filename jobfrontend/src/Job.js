import React, {Component} from 'react';
import JobEditForm from './JobEditForm';
class Job extends Component{

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.deleteJob(this.props.job, this.props.index)

  }

  render(){
    return (
      <div className="JobPost">
        <div className="JobFields">
          <p>{this.props.jobTitle}</p>
          <p>{this.props.companyName}</p>
          <p>{this.props.location}</p>
          <p>{this.props.salary}</p>
          </div>
          <JobEditForm editJob={this.props.editJob} jobId={this.props.id} index={this.props.index}/>

          <button onClick={this.handleClick}>
            Delete Job
          </button>
          <hr/>
      </div>

        )
    }
  }

export default Job;
