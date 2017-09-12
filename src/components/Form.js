import React, { Component } from 'react';
import '../styles/_Form.scss';
import axios from 'axios';
// import { profile } from '../server';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      date: "",
      state: "",
      city: "",
      comments: '',
      list: [],
      // login_profile: profile
    };
    this.handleSearch = this.handleSearch.bind(this);


  }


  handleSearch(event) {
    event.preventDefault()
    axios.get(`/api/jobs`).then((res) => {
      // console.log(res.data)
      let name = (this.state.name).toLowerCase();
      let state = (this.state.state).toLowerCase();
      let city = (this.state.city).toLowerCase();
      // let comments = (this.state.comments).toLowerCase();
      let sortedData = res.data;

      console.log(sortedData)
      //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~    sort names
      if (this.state.name) {
        sortedData = sortedData.filter((e) => {
          let index = (e.jobname).toLowerCase();
          console.log(index)
          return index.includes(name);
        })
      }
      //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~    sort state
      if (this.state.state) {
        sortedData = sortedData.filter((e) => {
          let index = (e.state).toLowerCase();
          // console.log(index)
          return index.includes(state);
        })
      }
      //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~    sort city

      if (this.state.city) {
        sortedData = sortedData.filter((e) => {
          let index = (e.city).toLowerCase();
          // console.log(index)
          return index.includes(city);
        })
      }


      this.setState({
        list: sortedData
      })


    })
  }

  handleChange(e) {

  }

  render() {

    return (
      <div className="Form">


        <form className='form_container'>
          Search By:

          <input onChange={(e) => this.setState({ 'name': e.target.value })} type="text" placeholder='Job name' value={this.state.name}></input>

          <input onChange={(e) => this.setState({ 'state': e.target.value })}
            type="text" placeholder='State' value={this.state.state}></input>

          <input onChange={(e) => this.setState({ 'city': e.target.value })} type="text" placeholder='City' value={this.state.city}></input>

          <button onClick={this.handleSearch} className="searchButton">Get Jobs</button>


        </form>
        <div className="results">Results
          <div className="titleHolder">
              <div className="title">ID</div>
              <div className="title">Job Name</div>
              <div className="title">Job Date</div>
              <div className="title">Job City</div>
              <div className="title">Job State</div>
          </div>
          <div className='list_container'>
            {this.state.list.map((element, i) => {
              return (
                <div className='element_list' key={element.id}>
                  <div>{element.id}</div>
                  <div>{element.jobname}</div>
                  <div>{(element.jobdate)}</div>
                  <div>{element.city}</div>
                  <div>{element.state}</div>
                </div>

              );
            })}
          </div>
        </div>

      </div>
    );
  }
}
