import React, { Component } from "react";

class Overview extends Component{
    render(){
    return(
        <ul>
            {
                this.props.tasks.map((task)=>{
                    return <li key={task.id}>{this.props.id}{task.text}</li>
                })
            }
        </ul>
    )
    }
}

export default Overview;