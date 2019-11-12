import React from 'react';

const Home = (props) => {

    return(
      <div className="Home">

        <h1>Search for a Job</h1>

        <form onSubmit={props.submitForm} className="searchJob">
        <input
        type="text"
        label="searchJob"
        value={props.searchJob}
        onChange={props.handleSearchJobChange}
        id="searchJob"
        placeholder="Enter Job Title"
        />
        <input type="submit" value="Search" />
        </form>

      </div>
    );
}

export default Home;
