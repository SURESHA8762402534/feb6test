import React, { Component, createElement } from 'react';
//import logo from './logo.svg';
import './App.css';
import Form from './Form.js';
import Container from './Container';

class App extends Component {
  constructor(props){
    super(props);
    //let cname =this.name.bind(this);

  }
 


  render(){
    return(
     
    <div className='formcontainer'>
     
      <Form/>
       {/* <Container/> */}
    </div>
   
   );
}
}

export default App;
