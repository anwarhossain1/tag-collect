import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import classes from './view.module.css';

export default class List extends Component {
    render() {
        return (
          <div className={classes.liContainer}>
            <ul>
      {
        this.props.items.map((item)=> {
          return <li className={classes.li} key={item}><span>{item}</span></li>
        })
       }
       
       <Link to={{pathname:"/as"}}><button className={classes.button}>+ add tag</button></Link>
      </ul>
      
      </div>
        )
        
    }
}
