import React, { Component } from 'react';

import Job from './Job';
import JobForm from './JobForm';
import JobDeleteForm from './JobDeleteForm';

class JobList extends Component {

    state = {
        jobs: [],
        apiDataLoaded:false
    }

    async componentDidMount() {
        try {
            const response = await fetch('http://localhost:8081/job/list')
            const json = await response.json();
            this.setState({
            jobs: json,
            apiDataLoaded:true })
        } catch (error) {
            console.log('Error retrieving jobs!', error)
        }
    }

    createJob = async (job, index) => {
      try {
          const newJobResponse = await fetch('http://localhost:8081/job/add', {
          method: 'post',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: job.name,
            code: job.code
          })
        })
          const json = await newJobResponse.json();
          const updatedJobList = [...this.state.jobs]
          updatedJobList.push(json)
          this.setState({jobs: updatedJobList})
        } catch(error) {
            console.log('Error creating new Job!')
            console.log(error)
        }
    }

    editJob = async (job, jobId, index) => {
      try {
          const editJobResponse = await fetch('http://localhost:8081/job/edit/{id}', {
          method: 'put',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            id: jobId,
            name: job.name,
            code: job.code
          })
        })
          let updatedJobList = [...this.state.jobs]
          const json = await editJobResponse.json();
          updatedJobList[index] = json
          console.log(index)
          console.log(editJobResponse)
          this.setState({jobs: updatedJobList})
        } catch(error) {
            console.log('Error with editing Job!')
            console.log(error)
        }
    }

    deleteJob = async (job, jobId, index) => {
      try {
          const deleteJobResponse = await fetch('http://localhost:8081/job/delete/{id}', {
          method: 'delete',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            id: jobId,
            name: null,
            code: null
          })
        })
          let deleteJobList = [...this.state.jobs]
          const json = await deleteJobResponse.json();
          deleteJobList[index] = json
          console.log(index)
          console.log(deleteJobResponse)
          this.setState({jobs: deleteJobList})
        } catch(error) {
            console.log('Error with deleting Job!')
            console.log(error)
        }
    }
    render() {
        return (
            <div>
                <h1>Jobs</h1>
                <JobForm createJob={this.createJob}/>
                {
                this.state.apiDataLoaded &&
                this.state.jobs.map((job, index) => {
                  return (
                      <Job
                          {...job}
                          key={index}
                          editJob={this.editJob}
                          index ={index}
                          deleteJob={this.deleteJob}
                          />
                  )})
                }
            </div>
        )
    }
}

export default JobList;
