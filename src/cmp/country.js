import React, { Component } from 'react'
import classes from './cmp.module.css';
import List from './List';

import { connect } from 'react-redux';
class country extends Component {
    state={
        
        updatedCountries:[]
    }
    componentDidMount(){
        this.setState({
            updatedCountries:this.props.cntrs
        })

    };

    FilterList=(e)=>{
        
        let updatedList=this.props.cntrs;
        updatedList=updatedList.filter(item=>{
            return item.toLowerCase().search(
                e.target.value.toLowerCase()) !== -1;
                
        })
        
        this.setState({
            updatedCountries:updatedList
        });

    }
    render() {
               return (
            <div className={classes.app}> 
                <input className={classes.input} type="text" placeholder="search" onChange={this.FilterList}/>
                <List items={this.state.updatedCountries}/>
                
                
                
            </div>
        )
    }
}
const mapStateToProps=state=>{
    return{
        cntrs:state.countries,
        upCntrs: state.updatedCountries
    }
        
}

const mapDispatchToProps= dispatch =>{
    return{
        onChangeHandler:()=> dispatch({type:'SOME'})
    }
    

}
    

export default connect(mapStateToProps,mapDispatchToProps)(country);
