import React, { Component, createElement } from 'react';
//import logo from './logo.svg';
import './App.css';
//import Form from './Form.js';
//import Container from './Container';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      value : [],
      list : [],
      show : false,
      ema:''
    }
  }
  handlechnge=(e)=>{
    //console.log('e',e)
    const {value} = e.target;
    this.setState({value:value})
    
  }
  
  handlechngee=(e)=>{
    //console.log('e',e)
    const {value} = e.target;
    this.setState({list:value})
    
  }
  handlechngea=(e)=>{
    //console.log('e',e)
    const {value} = e.target;
    this.setState({ema:value})
    
  }
  

  handlesubmit = (e) => {
    e.preventDefault();
    this.setState({show:!this.state.show})

  }

  // onAddItem = () => {
  //   // not allowed AND not working
  //   this.setState(state => {
  //     const list = this.state.list.push(this.state.value);
  //   }
  
 


  render(){
    return(
     
    <div className='formcontainer'>
     
     <form className='form' onSubmit={this.handlesubmit}>
                <div className='main'>
                
                <label>User name:-</label>
                <input id='name' type="text" onChange={this.handlechnge} placeholder='user name' />
                <label>phone number:-</label>
                <input id='ph' type='number' onChange={this.handlechngee} placeholder='ph no' />
                <label>     Email id :-</label>
                <input id='email' type='email' onChange={this.handlechngea} placeholder='email' />
                <label>password:-</label>
                <input id='pass' type='password' />
                </div>

               
                
                <button id='submit' type="submit"  className="btn">Save</button>
                <div className='text'>
                {this.state.show && this.state.value}<br></br>
                {this.state.list}<br></br>
                {this.state.ema}
                </div>
            </form>
    </div>
   
   );
}
}

export default App;
