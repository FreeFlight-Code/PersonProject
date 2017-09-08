import React, { Component } from 'react';
import '../styles/_Form.scss';

export default class Form extends Component {
  render() {
    return (
      <div className="Form">
            <div className="results"></div>
          
            <form className='form_container' action="">
                Search By:
              <input type="text"placeholder='Job name'></input>
              <input type="text" placeholder='Date of job'></input>
              <input type="text" placeholder='State'></input>
              <input type="text" placeholder='City'></input>
              <input type="text" placeholder='comments'></input> 
              <button className="submitButton">Submit</button>
              <button className="searchButton">Searching</button>
            </form>          
         
      </div>
    );
  }
}
