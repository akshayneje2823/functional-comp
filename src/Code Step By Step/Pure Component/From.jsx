import React, { Component } from 'react'

 class From extends Component {
    constructor(){
        super();
        this.state ={
            data:10
        } 
    }
  render() {
    return (
      <div>
        <h1>Pur Component</h1>
        <h2>{this.state}</h2>
        <button onClick={()=>{this.setState({data:11})}}></button>
      </div>
    )
  }
}
export default From