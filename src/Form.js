import React, { Component } from 'react';
import "./App.css";

export default class Form extends Component{
    constructor(){
        super();
       // let clicking = this.clicking.bind(this);
    }
    onSubmit(e) {
        e.preventDefault();
        var title = this.title;
        console.log(title);
    }
    

    render(){
        return(
            <form className='form'>
                <div className='main'>
                {/* <label></label> */}
                {/* <input type="text" className="form-control" ref={(c) => this.title = c} name="title" /> */}
                
                <label>User name:-</label>
                <input id='name' type="text" placeholder='user name' required/>
                <label>phone number:-</label>
                <input id='ph' type='number' placeholder='ph no' required/>
                <label>     Email id :-</label>
                <input id='email' type='email' placeholder='email' required/>
                <label>password:-</label>
                <input id='pass' type='password' required/>
                </div>
                
                <button id='submit' type="button" onClick={this.onSubmit} className="btn">Save</button>
            </form>
        );
    }
}

