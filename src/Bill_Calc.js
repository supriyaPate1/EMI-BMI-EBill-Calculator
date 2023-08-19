import React, { Component } from 'react'
import './bill.css'
export default class Bill_Calc extends Component {
  state={
    bill:0,
  }
  bill=()=>{
   var units=document.getElementById('unit').value;
   //console.log(units);
   if(units <= 50){
    this.setState({
      bill:3.50*units,
    })
   } 
   else if(units > 50 && units <= 150){
    this.setState({
      bill:(3.50*50)+(units-50)*4,
    })
  }
    else if(units > 150 && units<=250){
      this.setState({
        bill:(3.50*50)+(4*100)+(units-150)*5.20,
      })
   }
   else{
    this.setState({
      bill:(3.50*50)+(4*100)+(100*5.20)+(units-250)*6.50,
    })
   }
  }
  render() {
    return (
      <>
      <h1>Electricity Bill Calculator</h1>
      <div className='bill'>
        <input id='unit' type="text" placeholder='enter units'/>
        <button onClick={this.bill}>Calculate Bill</button>
        <h4>Your Total Bill is:{this.state.bill}</h4>
      </div>
      </>
    )
  }
}
