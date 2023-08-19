import React, { Component } from 'react'
import'./bmi.css'
export default class Bmi_Calc extends Component {
state={
    bmi:0,
    result:"",
    click:""
}
//function to change height and weight in dropdown menu
CalcBmi=(event)=>{
  
    var clickT=event.target.value;
    if (clickT==="cm"){
     document.getElementById('weight').value='kg';
    }
    if (clickT==="kg"){
      document.getElementById('height').value='cm';
     }
     if (clickT==="Pounds"){
      document.getElementById('height').value='inches';
     }
     if (clickT==="inches"){
      document.getElementById('weight').value='Pounds';
     }
    this.this.setState({
        click:clickT,
    })
    }

  //function to check the status of weight according to BMI calculated  
calc_status=()=>{

  var bmi1=0;
  var height=document.getElementById('ht').value;
  var weight=document.getElementById('wt').value;
    
     if(this.state.click==='cm'||this.state.click==='kg'){
      bmi1=weight/((height/100)**2);
     
     }
     else{
      bmi1=(weight/((height**2))*703);
     }
    
     //updating value of bmi with bmi1 and accordingly displaying the status of weight
     this.setState({
      bmi:bmi1,
     })
     console.log(bmi1);
    if(bmi1<=18.5){
      this.setState({
        result:"Under Weight"
      })
    }
    else if(bmi1>18.5&& bmi1<=24.9){
      this.setState({
        result:"Healthy Weight"
      })
    }
    else if(bmi1>24.9&&  bmi1<=29.9){
      this.setState({
        result:"Over Weight"
      })
    }
    else if(bmi1>30){
      this.setState({
        result:"Obesity"
      })
    }
    document.getElementById('ht').value="";
    document.getElementById('wt').value="";
    }
    


  render() {
    if(this.state.bmi!=""&& this.state.result!="")
    var fields= <div className='display'>
    <h5 id='bm'>BMI is: {this.state.bmi}</h5>
    <h5 id='status'>Weight status: {this.state.result}</h5>
 </div>
    return (
      <div className='bmi'>
        <h1>BMI Calculator</h1>
         <table className='display'>
            <tr>
                <td >Height:</td>
                <td><input id="ht" type="text" placeholder="Enter Height"/>
                  <select id='height'onClick={this.CalcBmi}>
                    <option >cm</option>
                    <option >inches</option>
                  </select>
                </td>
            </tr>

            <tr>
                <td >Weight:</td>
                <td><input id="wt" type="text" placeholder="Enter Weight"/>
                  <select id='weight'  onClick={this.CalcBmi}>
                    <option >kg</option>
                    <option >Pounds</option>
                  </select>
                </td>
            </tr>

            <tr>
                <td></td>
                <td><button type="button" onClick={this.calc_status}>Submit</button></td>
               
            </tr>
    
          </table>
        <div className='display'>
          <h4>{fields}</h4>
          {/* <h5 id='bm'>BMI is: {this.state.bmi}</h5>
          <h5 id='status'>Weight status: {this.state.result}</h5> */}
       </div>
      </div>
    )
  }
}
