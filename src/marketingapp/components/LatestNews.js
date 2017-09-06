import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';



class LatestNews extends Component {
  render() {
    return (
      <div className="LatestNews">
            <Header />
            <div className='news'></div>
            <Footer />
          
      </div>
    );
  }
}

export default LatestNews;
