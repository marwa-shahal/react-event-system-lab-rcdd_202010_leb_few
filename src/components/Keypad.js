// Code Keypad Component Here
import React from 'react';

export default class Keypad extends Component {
  constructor(){
    super();
    
  }
  
  handleKeyUp = (value)=>{
    console.log('Entering password....')
  }
  
  render(){
    return (
      <input keyUp={handleKeyUp} />
      )
  }
}