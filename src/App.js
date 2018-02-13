import React, { Component } from 'react';
import axios from 'axios';
import Display from './Container/Display';
import './App.css';

class App extends Component {
  constructor()
  {
    super();
    this.state={
      repo_name:'react',
      arr:[],
      isOpen:false,
      sort:'stars'
    }
   

  }
  componentDidMount()
  {
    this.getValue();
  }

  getValue=()=>
  {

    axios.get(`https://api.github.com/search/repositories?q=${this.state.repo_name}&sort=${this.state.sort}`)
    .then((res)=>{
      console.log(res.data.items);
      this.setState({
        arr:res.data,
        isOpen:true
      })
    
    })
  }

  handleChange=(e)=>{
 
    this.setState({
      repo_name:e.target.value,
      isOpen:false
    })
  }
 
  handleKey=(e)=>{
   if(e.charCode===13)
   {
    
     this.getValue();
   
   } }

  sortHandle=(name)=>{
    this.setState({
      sort:name
    },this.getValue)
    console.log(this.state.sort);
     }
  
  handleClick=()=>{
   
    this.getValue();
  }


  render() {

    return (
      <div className="App">


       <input type='text' className="AppInput"
       value={this.state.repo_name}
       onChange={(e)=>this.handleChange(e)}
       onKeyPress={(e)=>this.handleKey(e)}
       />
       <button className="AppButton"
        onClick={this.handleClick}>Search</button><br/>
       <p className="pButton"
       >Sort according To</p>

       
       <button className="AppButton" onClick={()=>this.sortHandle('upadated-asc')}>Updated</button>
       <button className="AppButton"  onClick={()=>this.sortHandle('stars')}>Star</button>
       <button className="AppButton" onClick={()=>this.sortHandle('score')}>Score</button>
       

        {
          this.state.isOpen ? <Display arr={this.state.arr} /> :
          null
        }
      
 
      </div>
    );
  }
}

export default App;
