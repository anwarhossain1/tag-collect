import React, { Component } from 'react';
import classes from './TextSearch.module.css';
import View from './View';

export default class TextSearch extends Component {
    state={
        spValues:[],
        array:[
            "America",
            "Bangladesh",
            "Canada",
            "Denmark",
            "Ethiopia",
            "Finland",
            "Greece",
            "Haiti",
            "Italy",
            "Japan",
            "Kenya"
        ],
        newVal:[]
    }

    handleSubmit=(e)=>{
        this.setState({
            array: this.state.array.map(item=>item.toLowerCase(),
            )
        })
        let a=e.target.value.split(" ");
        a= a.map(item=>item.toLowerCase())
        console.log(a)
        
        this.setState({
            spValues:a
        })
        console.log(this.state.spValues);
         let upValue= this.state.spValues;
         upValue=upValue.filter(vv=>this.state.array.includes(vv)).map(item=>item)
         this.setState({
             newVal:upValue
         })

    }

    
    render() {
        return (
            <div>
                
                <input className={classes.input} type="text" placeholder="Write your text here" onChange={this.handleSubmit} />
                <View items={this.state.newVal}/>
                
                
                
                
            </div>
        )
    }
}
