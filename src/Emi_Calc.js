import React, { Component } from 'react'
import './emi.css'
export default class Emi_Calc extends Component {
    state={
        emi:0,
        interest:0,
        payment:0,
        temp:false,
    }
    
     emiCalc=()=>{
       var Totalemi=0;
       var Tinterest=0;
       var Tpayment=0;

        var amt=document.getElementById('amt').value;
        var year=document.getElementById('yr').value;
        var month =document.getElementById('mon').value;
        var intrate=document.getElementById('intr').value;

        var yrToMonth=(year*12);
        var tMonths=+yrToMonth+ +month;
        var  Rate=intrate/12/100;
       
        
        Totalemi=(amt*Rate*(1+Rate)**tMonths)/(((1+Rate)**tMonths)-1);
        Tpayment=Totalemi*tMonths;
        Tinterest= Tpayment-amt;
       
        this.setState({
            emi:Totalemi,
            interest:Tinterest,
            payment:Tpayment,
        })
        if(this.state.emi!=""&& this.state.interest!=""&&this.state.payment!=""){
            document.getElementById('EMI').value=Totalemi;
        } 
        else{
            document.getElementById('EMI').value="";
        }
        // document.getElementById('EMI').value=Totalemi;

     }
     reset=()=>{
         document.getElementById('amt').value="";
         document.getElementById('yr').value="";
         document.getElementById('mon').value="";
         document.getElementById('intr').value="";
         document.getElementById('EMI').value="";
       this.setState({
        emi:0,
        interest:0,
        payment:0,
        temp:false,
       }) 
     }
     details=()=>{
        if(this.state.emi!=""&& this.state.interest!=""&&this.state.payment!=""){
            this.setState({
                temp:true,
            })
        } 
     }

  render() {
     if(this.state.temp===true ){
       {
        var tab=    
             <table  className='table1'>
             <tr className='detailtab'>
                  <td >Monthly EMI</td>
                  <td >{this.state.emi}</td>
              </tr>
              <tr className='detailtab'>
                  <td >Total Interest</td>
                  <td >{this.state.interest}</td>
              </tr>
              <tr className='detailtab'>
                  <td >Total Payement</td>
                  <td >{this.state.payment}</td>
              </tr>
              </table>
              
          
       }
    }
    return (
        <>
      <div >
      <h1 className='emi'>EMI Calculator</h1>
         <table className='table1'>
            <tr>
                <td >Loan Amount:</td>
                <td><input id="amt" type="number" placeholder="Enter amount"/>
                    </td>
            </tr>

            <tr>
                <td >Interest:</td>
                <td><input id="intr" type="number" placeholder="Enter rate"/></td>
            </tr>
            <tr>
                <td >Period:</td>
                <td><input id="yr" type="number" placeholder="Enter years"/>
                <input id="mon" type="number" placeholder="Enter months"/></td>
            </tr>

            <tr>
                <td>EMI:</td>
                <td><input id='EMI'/></td>
            </tr>
            <tr >
              <td className='bt'><button onClick={this.emiCalc}>Calculate</button></td>
              <td className='bt'><button onClick={this.reset} >Reset</button></td>
              <td className='bt'><button onClick={this.details}>Details</button></td>
            </tr>
     </table>
     <div>{tab}</div>
      </div>
      </>
    )
  }
}
