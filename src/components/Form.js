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
    // const url = 'http://localhost:3030/';

  }
  // handleSearch() {
    // console.log('starting handlesearch')
    // var params = undefined;
    // if (this.state.name) {
    //   params="?name=" + this.state.name.toString();
    // }
    // axios.get('http://localhost:3030/api/jobs' + (params?params:'')).then((res) => {
      

  handleSearch(event) {
    event.preventDefault()
    axios.get(`http://localhost:3030/api/jobs`).then((res) => {
      console.log(res)
      

      this.setState({
        list: res.data
      })
    })
  }

  // return axios.get(`http://localhost:3030/api/jobs`).then((res) => {
    
  //    console.log(res);
  //    // console.log(name);
  //    // if (this.state.name) {
  //    //   sortedData = sortedData.filter((e) => {
  //    //     let index = (e.jobname).toLowerCase();
  //    //     console.log(index)
  //    //     return index.includes(name);
  //    //   })
  //    }
  //    // if (this.state.date) {
  //    //   sortedData = sortedData.filter((e) => {
  //    //     let index = (e.date);
  //    //     // console.log(index)
  //    //     return index.includes(date);
  //    //   })
  //    // }
  //    // if (this.state.state) {
  //    //   sortedData = sortedData.filter((e) => {
  //    //     let index = (e.state).toLowerCase();
  //    //     // console.log(index)
  //    //     return index.includes(state);
  //    //   })
  //    // }
  //    // if (this.state.city) {
  //    //   sortedData = sortedData.filter((e) => {
  //    //     let index = (e.city).toLowerCase();
  //    //     // console.log(index)
  //    //     return index.includes(city);
  //    //   })
  //    // }
  //    // if (this.state.comments) {
  //    //   sortedData = sortedData.filter((e) => {
  //    //     let index = (e.comments).toLowerCase();
  //    //     // console.log(index)
  //    //     return index.includes(comments);
  //    //   })
  //    // }

  //  //   this.setState({
  //  //     list: sortedData
  //  //   })
  //  ).catch(error => {
  //    console.log(error)
  //  }) 


  handleChange(e) {

  }

  render() {

    // var myList = `{<li>} ${this.state.list[0].jobname} {</li>}`;

    return (
      <div className="Form">
        <div className="results">
          <ul className='list_container'>
            {this.state.list.map((element, i) => {
              return (
                <li key={element.id}> 
                  {element.id}
                  {element.jobname}
                  {element.jobdate}
                  {element.city}
                  {element.state}
                </li>
              );
            })}
          </ul>
        </div>

        <form className='form_container' action="">
          Search By:
          <input onChange={(e) => this.setState ({ 'jobname': e.target.value})} type="text" placeholder='Job name' value={this.state.name}></input>
          <input onChange={(e) => this.setState ({ 'date': e.target.value})} type="text" placeholder='Date of job' ></input>
          <input onChange={(e) => this.setState ({ 'state': e.target.value})}
         type="text" placeholder='State' value={this.state.state}></input>
          <input onChange={(e) => this.setState ({ 'city': e.target.value})} type="text" placeholder='City' value={this.state.city}></input>
          <input onChange={(e) => this.setState ({ 'comments': e.target.value})} type="text" placeholder='comments' value={this.state.comments}></input>

          <button onClick={this.handleSearch} className="searchButton">Search</button>
        </form>

      </div>
    );
  }
}
