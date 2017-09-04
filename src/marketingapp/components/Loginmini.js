import React, { Component } from 'react';

export default class Loginmini extends Component {
    constructor(){
        super()
        this.state = {
            
        
        }
        // getInitialState(){
        //     return {"showHideSidenav":"hidden"};
        //   }
          
        //   render() {
        //       return (
        //           <div className="Loginmini">
        //               <i className="border hide-on-small-and-down"></i>
        //               <div className="containermini">
        //                   <a ref="btn" onClick={this.toggleSidenav.bind(this)} href="#" className="btn-menu show-on-small"><i></i></a>
        //                   <Menu className="menu hide-on-small-and-down"/>
        //                   <Sidenav className={this.props.showHideSidenav}/>
        //               </div>
        //           </div>
        //       )
        //   }
          
        //   toggleSidenav() {
        //       var css = (this.props.showHideSidenav === "hidden") ? "show" : "hidden";
        //       this.setState({"showHideSidenav":css});
        //   }
    }


    render() {
        return (
            <div className='Loginmini'>
                <div className="containermini">
                    LOG-in
                </div>
            </div>
        )
    }

}