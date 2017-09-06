import React, { Component } from 'react';
import hotdog from '../images/hotdog.jpg';
import bananas from '../images/bananas.jpg';
import BAS from '../images/progressivegirls.jpg';
class Main02 extends Component {
    render() {
        return (
            <div className='Main02'>
                <div className="main02Header">Upload Photos Here</div>
                <div className="main02Container">
                    <img src={ hotdog } alt="hot dog" className="img-responsive"/>
                    <img src={ bananas } alt="2 people banana costume" className="img-responsive"/>
                    <img src={ BAS } alt="progressive girls" className="img-responsive"/>
                </div>
            </div>
                
        );
    }
}

export default Main02;