import React, { Component } from 'react';
import '../styles/_ClientForm.scss';
import axios from 'axios';
// import { profile } from '../server';

export default class Client_Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cust_id: "",
      name: "",
      date: "",
      state: "",
      city: "",
      comments: '',
      list: [],
      details: []
      // login_profile: profile
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleDetails = this.handleDetails.bind(this);


  }


  handleSearch(event) {
    event.preventDefault()
    let id = this.state.cust_id;
    axios.get('http://localhost:3030/api/jobSingleCustomer/' + id).then((res) => {
      // console.log('handlesearch in  clientform'+res.data)
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

  handleDetails(event) {
    event.preventDefault()
    axios.get(`/api/jobs`).then((res) => {
      let id = this.state.id;
      let sortedData = res.data;
      //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~    id sort
      if (this.state.id) {
        sortedData = sortedData.filter((e) => {
          let index = (e.id);
          console.log(index)
          return index.includes(id);
        })
      }
      this.setState({
        details: sortedData
      })


    })
  }

  render() {

    return (
      <div className="Client_Form">


        <form className='Client_Form_container'>
          Add:

          <input className='input_client' onChange={(e) => this.setState({ 'name': e.target.value })} type="text" placeholder='Job name' value={this.state.name}></input>

          <input className='input_client' onChange={(e) => this.setState({ 'state': e.target.value })}
            type="text" placeholder='State' value={this.state.state}></input>

          <input className='input_client' onChange={(e) => this.setState({ 'city': e.target.value })} type="text" placeholder='City' value={this.state.city}></input>

          <button onClick={this.handleSearch} className="searchButton">Get Jobs</button>

          <button onClick={this.handleDetails} className="searchButton">Get Details</button>

          <input className='input_client' onChange={(e) => this.setState({ 'id': e.target.value })} type="text" placeholder='Job ID' value={this.state.id}></input>

        </form>
        <div className="results">{this.state.name}
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
