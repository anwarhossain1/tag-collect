import React, { Component } from 'react'
import classes from './cmp.module.css';
import List from './List';
import TextSearch from './TextSearch';
import { connect } from 'react-redux';
class country extends Component {
    // state={
    //     countries:[
    //         "America",
    //         "Bangladesh",
    //         "Canada",
    //         "Denmark",
    //         "Ethiopia",
    //         "Finland",
    //         "Greece",
    //         "Haiti",
    //         "Italy",
    //         "Japan",
    //         "Kenya"

    //     ],
    //     updatedCountries:[]
    // }
    // componentDidMount(){
    //     this.setState({
    //         updatedCountries:this.state.countries
    //     })

    // };

    FilterList=(e)=>{
        
        let updatedList=this.state.countries;
        updatedList=updatedList.filter(item=>{
            return item.toLowerCase().search(
                e.target.value.toLowerCase()) !== -1;
                
        })
        
        // this.setState({
        //     updatedCountries:updatedList
        // });

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
        countries:state.countries
    }
        
}

const mapDispatchToProps= dispatch =>{
    return{
        onChangeHandler:()=> dispatch({type:'SOME'})
    }
    

}
    

export default connect(mapStateToProps,mapDispatchToProps)(country);
