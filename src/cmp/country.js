import React, { Component } from 'react'
import classes from './cmp.module.css';
import List from './List';
import TextSearch from './TextSearch';
export default class country extends Component {
    state={
        countries:[
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
        updatedCountries:[]
    }
    componentDidMount(){
        this.setState({
            updatedCountries:this.state.countries
        })

    };

    FilterList=(e)=>{
        
        let updatedList=this.state.countries;
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
                {/* <TextSearch countries={this.state.countries}/> */}
                
                
                
            </div>
        )
    }
}
