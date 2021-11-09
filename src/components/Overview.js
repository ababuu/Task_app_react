import React, { Component } from "react";
import './Overview.css'

class Overview extends Component{
    render(){
    return(
        <ul>
            {
                this.props.tasks.map((task)=>{
                    return <li className='list' key={task.id}>{this.props.id}{task.text}</li>
                })
            }
        </ul>
    )
    }
}

export default Overview;