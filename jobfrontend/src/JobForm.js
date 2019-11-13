import React, { Component } from 'react';

class JobForm extends Component {

  state = {
    newJobForm: {}
  }

  handleChange = (event) => {
    const attributeToChange = event.target.name
        const newValue = event.target.value

        const updatedNewCourse = { ...this.state.newCourse }
        updatedNewCourse[attributeToChange] = newValue
        this.setState({ newCourse: updatedNewCourse })
    }

    handleSubmit = (event) => {
    event.preventDefault()
    this.props.createCourse(this.state.newCourse)
}
  render(){
    return(
      <div className="JobForm">
      <h1>Post a Job</h1>

      <form onSubmit={props.submitForm}>
      <input
      type="text"
      label="jobTitle"
      value={props.jobTitle}
      onChange={props.handleJobTitleChange}
      id="jobTitle"
      placeholder="Job Title"
      />
      </form>

      <form onSubmit={props.submitForm}>
      <input
      type="text"
      label="companyName"
      value={props.companyName}
      onChange={props.handleCompanyNameChange}
      id="companyName"
      placeholder="Company Name"
      />
      </form>

      <form onSubmit={props.submitForm}>
      <input
      type="text"
      label="location"
      value={props.locations}
      onChange={props.handleLocationChange}
      id="location"
      placeholder="Location"
      />
      </form>

      <form onSubmit={props.submitForm}>
      <input
      type="text"
      label="salary"
      value={props.salary}
      onChange={props.handleSalaryChange}
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
