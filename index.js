import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//forms maintain state
/*{ <form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
    <input type="submit" value="Submit" />
</form>} */

//we achive this in react using controlled component
//controlled vs uncontrolled component
//cc - react handles data
//ucc - DOM handles data
//mutable vs immutable state

class MyLoggedFOrm extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div class="User">
        <form class="login-container">
        <h2 class="login-header">Hello {this.props.name}</h2>
        <h2>You have successfully logged in</h2>
        </form>
        </div>
    );
  }

}

class MyLoginFOrm extends React.Component{
  constructor(props){
    super(props);
    this.state = {value:'',password: ''};
    this.loginUserChange = this.loginUserChange.bind(this);
    this.loginPassChange = this.loginPassChange.bind(this);
    this.loginSubmit = this.loginSubmit.bind(this);
    
  }

  loginUserChange(event){
    this.setState({value: event.target.value});
  }
  
  loginPassChange(event){
    this.setState({password: event.target.password});
    console.log(event.target.password);
  }
  loginSubmit(event){
    alert('Are you sure you want to submit form?'+this.state.value);
    event.preventDefault();
    this.props.userChange(this.state.value,this.state.password);
  }

  render(){
    return(
      <div class="login">
        <form class="login-container" onSubmit={this.loginSubmit}>
        <h2 class="login-header">Sign in</h2>
         <p><input type="text" value={this.state.value} onChange={this.loginUserChange} placeholder="Enter username" required /></p>
          <p><input type="password" value={this.state.password} onChange={this.loginPassChange} placeholder="Enter password" required /></p>
          <input type="submit" value="Submit" />
        </form>
        </div>
    );  
  }

}

class MyMainFOrm extends React.Component{
  constructor(props){
    super(props);
    this.state = {name:'',password: ''};
  }

  handleUserChange(user, pass){
    this.setState({name:user,
      password : pass})
  }

  render(){
    return(
     <div> {this.state.name == '' ? (
        <MyLoginFOrm userChange = {this.handleUserChange.bind(this)}/>
    ) : (
      <MyLoggedFOrm loginName = {this.state.value} passName = {this.state.password}/>
    )} </div>
    );
  }

}

ReactDOM.render(
  <MyMainFOrm />, document.getElementById('root')
 );

