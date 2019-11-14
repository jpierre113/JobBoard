import React, { Component } from 'react';

class JobForm extends Component {

  state = {
    newJob: {}
  }

  handleChange = (event) => {
        const attributeToChange = event.target.name
        const newValue = event.target.value

        const updatedNewJob = { ...this.state.newJob }
        updatedNewJob[attributeToChange] = newValue
        this.setState({ newJob: updatedNewJob })
    }

    handleSubmit = (event) => {
    event.preventDefault()
    this.props.createJob(this.state.newJob, this.props.index)
}
  render(){
    return(
      <div className="JobForm">
      <h1>Post a Job</h1>

      <form onSubmit={this.handleSubmit}>
        <div>
        <label>Job Title</label>
          <input
          name="jobTitle"
          type="text"
          label="jobTitle"
          value={this.jobTitle}
          onChange={this.handleChange}
          id="jobTitle"
          placeholder="Job Title"
          />
        </div>


        <div>
        <label>Company</label>
          <input
          name="companyName"
          type="text"
          label="companyName"
          value={this.companyName}
          onChange={this.handleChange}
          id="companyName"
          placeholder="Company Name"
          />
        </div>

        <div>
        <label>Location</label>
          <input
          name="location"
          type="text"
          label="location"
          value={this.location}
          onChange={this.handleChange}
          id="location"
          placeholder="Location"
          />
        </div>

        <div>
        <label>Salary</label>
          <input
          name="salary"
          type="text"
          label="salary"
          value={this.salary}
          onChange={this.handleChange}
          id="salary"
          placeholder="Salary"
          />
        </div>

        <div>
          <input type="submit" value="Create Job" />
        </div>

        </form>

      </div>
    );
  }
}
 export default JobForm;
