import React, { Component } from 'react';

class JobEditForm extends Component {

    state = {
        editJob: {}
    }

    handleChange = (event) => {
        const attributeToChange = event.target.name
        const newValue = event.target.value

        const updatedNewJob = { ...this.state.editJob }
        updatedNewJob[attributeToChange] = newValue
        this.setState({ editJob: updatedNewJob })
    }

    handleSubmit = (event) => {
    event.preventDefault()
    this.props.editJob(this.state.editJob, this.props.jobId, this.props.index)
}


    render() {
        return (
            <div>
                <h2>Edit Job</h2>

                <form onSubmit={this.handleSubmit}>
                    <div>

                        <input
                            name="jobTitle"
                            type="text"
                            onChange={this.handleChange}
                            placeholder="jobTitle" />
                    </div>

                    <div>

                        <input
                            name="companyName"
                            type="text"
                            onChange={this.handleChange}
                            placeholder="companyName"/>
                    </div>

                    <div>

                        <input
                            name="location"
                            type="text"
                            onChange={this.handleChange}
                            placeholder="location"/>
                    </div>

                    <div>

                        <input
                            name="salary"
                            type="text"
                            onChange={this.handleChange}
                            placeholder="salary"/>
                    </div>

                    <div>
                        <input type="submit" value="Edit Job"/>
                    </div>
                </form>


            </div>
        )

    }

}

export default JobEditForm;
