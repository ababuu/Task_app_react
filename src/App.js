import React, { Component } from 'react';
import uniqid from 'uniqid';
import Overview from './components/Overview';
import './App.css';
class App extends Component {
  constructor(){
    super();
    this.state={
      task: {
        text: '',
        id: uniqid()
      }, 
      tasks: [],
      num: 0,
    }
    this.handleChange= this.handleChange.bind(this);
    this.onSubmitTask=this.onSubmitTask.bind(this);
  }
  handleChange(e){
    this.setState({
      task: { 
        text:e.target.value,
        id: this.state.task.id,
      }
    })
  }
  onSubmitTask(e){
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: {
        text: '',
        id: uniqid()},
      num: this.state.num + 1
    })
  }
  render(){
    const {task ,tasks, num}=this.state;
    
    return (
      <div className='container-div'>
        <div className='inner-container'>
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor='taskInput'>Enter a task</label>
          <input id='taskInput' type='text' onChange={this.handleChange} value={task.text}/>
          <button type='submit'>Add Task</button>
        </form>
        </div>
        <div>
        <Overview tasks={tasks} num={num} id={task.id}/>
        </div>
      </div>
    );
  }
}

export default App;
