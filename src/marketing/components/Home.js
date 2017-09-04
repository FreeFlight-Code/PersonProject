import React, { Component } from 'react';
import Header from './Header';
import Carousel from './Carousel';
import Main01 from './Main01';
import Main02 from './Main02';
import Main03 from './Main03';
import Footer from './Footer';


class Home extends Component 
{
  render() {
    return (
      <div className="Home">
            
            <Header />
            <Carousel />
            <Main01 />
            <Main02 />
            <Main03 />
            <Footer />
            
      </div>
    );
  }
}

export default Home;