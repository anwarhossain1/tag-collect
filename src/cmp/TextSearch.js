import React, { Component } from 'react';
import classes from './TextSearch.module.css';
import View from './View';
import { connect } from 'react-redux';

class TextSearch extends Component {
    state={
        spValues:[],
        array:[],
        newVal:[]
    }

    handleSubmit=(e)=>{
        this.setState({
            array: this.props.arr.map(item=>item.toLowerCase(),
            )
        })
        let a=e.target.value.split(" ");
        a= a.map(item=>item.toLowerCase())
        
        
        this.setState({
            spValues:a
        })
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

const mapStatetoProps= state=>{
    return{
        arr: state.countries
    }
}

export default connect(mapStatetoProps)(TextSearch);
