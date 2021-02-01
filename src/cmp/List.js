import React, { Component } from 'react'

export default class List extends Component {
  

  handleButton=(item)=>{
    

  }
    render() {

        return (
            <ul>
      {
        this.props.items.map((item)=> {
          return (
            <>
            <li style={{padding:5,marginRight:20}} key={item}>{item}
            <button  onClick={this.handleButton()}>+</button></li>
            
            </>
          )
        })
       }
      </ul>
        )
    }
}
