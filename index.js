import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Welcome = ({user, onSignOut})=> {
 return (
    <div>
      Welcome <strong>{user.username}</strong>!
      <a href="javascript:;" onClick={onSignOut}>Sign out</a>
    </div>
  )
}

class LoginForm extends React.Component {
 
  handleSignIn(e) {
    e.preventDefault()
    let username = this.refs.username.value
    let password = this.refs.password.value
    this.props.onSignIn(username, password)
  }
  
  render() {
    return (
      <div class="login">
      <form class="login-container" onSubmit={this.handleSignIn.bind(this)}>
        <h2 class="login-header">Sign in</h2>
        <p><input type="text" ref="username" placeholder="enter you username" required /></p>
       <p><input type="password" ref="password" placeholder="enter password" required /></p>
        <input type="submit" value="Login" />
      </form>
      </div>
    )
  }

}


class Appform extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      user: null
    }
  }

  signIn(username, password) {
    this.setState({
      user: {
        username,
        password,
      }
    })
  }
  
  signOut() {
    this.setState({user: null})
  }
  
  render() {
    return (
      <div class="welcometext">
        <h1>My App</h1>
        { 
          (this.state.user) ? 
          <div class="login">
            <Welcome 
             user={this.state.user} 
             onSignOut={this.signOut.bind(this)} 
            />
            </div>
          :
            <LoginForm 
             onSignIn={this.signIn.bind(this)} 
            />
        }
      </div>
    )
    
  }
  
}

ReactDOM.render(<Appform/>, document.getElementById("root"))


/* class MyToggleComp extends React.Component{

    constructor(props){
      super(props);
      this.state = {isOn:true};
      this.myHandler = this.myHandler.bind(this);
      
    }

    myHandler(){
      this.setState( state => ({
        isOn: !state.isOn
      }
      )
      );
      console.log("yes state is on.");
    }

    render(){
      return(
        <div class="login">
  <div class="login-triangle"></div>
  
 
        <form class="login-container">
          
          {
            this.state.isOn ?
            <div>
            <h2 class="login-header">Log in</h2>
            <p><input type="email" placeholder="Email" required/></p>
            <p><input type="password" placeholder="Password"/></p>
            </div>
            :<div> <h2 class="login-header">Welcome User !</h2>
            <p>Thanks for visiting.</p>
            </div>
          }
        <button onClick={this.myHandler}>{this.state.isOn ? 'Login' : 'Logout'}</button>
        </form>
        </div>
      );
    }
}

ReactDOM.render(
  <MyToggleComp />, document.getElementById('root')
); */