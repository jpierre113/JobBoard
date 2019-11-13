import React, { Component } from 'react';

class JobDeleteForm extends Component {

    state = {
        deleteJob: {}
    }

    // handleChange = (event) => {
    //     const attributeToChange = event.target.name
    //     const newValue = event.target.value
    //
    //     const deleteNewJob = { ...this.state.deleteJob }
    //     deleteNewJob[attributeToChange] = newValue
    //     this.setState({ deleteJob: deleteNewJob })
    // }

    handleSubmit = (event) => {
    event.preventDefault()
    this.props.deleteJob(this.state.deleteJob, this.props.JobId, this.props.index)
}


    render() {
        return (
            <div>
                <h2>Delete Job</h2>

                    <div>
                        <button onSubmit={this.handleSubmit} type="submit" value="Delete Job"></button>
                    </div>


                <hr />
                <hr />
            </div>
        )

    }

}

export default JobDeleteForm;
