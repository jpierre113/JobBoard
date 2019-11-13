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
        this.setState({ newJobForm: updatedNewJob })
    }

    handleSubmit = (event) => {
    event.preventDefault()
    this.createJob(this.state.newJob)
}
  render(){
    return(
      <div className="JobForm">
      <h1>Post a Job</h1>

      <form onSubmit={this.submitForm}>
      <input
      type="text"
      label="jobTitle"
      value={this.jobTitle}
      onChange={this.handleJobTitleChange}
      id="jobTitle"
      placeholder="Job Title"
      />
      </form>

      <form onSubmit={this.submitForm}>
      <input
      type="text"
      label="companyName"
      value={this.companyName}
      onChange={this.handleCompanyNameChange}
      id="companyName"
      placeholder="Company Name"
      />
      </form>

      <form onSubmit={this.submitForm}>
      <input
      type="text"
      label="location"
      value={this.locations}
      onChange={this.handleLocationChange}
      id="location"
      placeholder="Location"
      />
      </form>

      <form onSubmit={this.submitForm}>
      <input
      type="text"
      label="salary"
      value={this.salary}
      onChange={this.handleSalaryChange}
      id="salary"
      placeholder="Salary"
      />
      </form>
      <input type="submit" value="Submit a Job!" />


      </div>
    );
  }
}
 export default JobForm;
