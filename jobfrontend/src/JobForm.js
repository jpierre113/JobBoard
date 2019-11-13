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
    this.props.createJob(this.state.newJob)
}
  render(){
    return(
      <div className="JobForm">
      <h1>Post a Job</h1>

      <form onSubmit={this.submitForm}>
        <div>
        <input
        type="text"
        label="jobTitle"
        value={this.jobTitle}
        onChange={this.handleChange}
        id="jobTitle"
        placeholder="Job Title"
        />
        </div>


        <div>
        <input
        type="text"
        label="companyName"
        value={this.companyName}
        onChange={this.handleChange}
        id="companyName"
        placeholder="Company Name"
        />
        </div>

        <div>
        <input
        type="text"
        label="location"
        value={this.locations}
        onChange={this.handleChange}
        id="location"
        placeholder="Location"
        />
        </div>

        <div>
        <input
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
