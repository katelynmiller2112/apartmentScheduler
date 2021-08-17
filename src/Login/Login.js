import * as React from 'react';
import {Button, FormText} from 'react-bootstrap';
import * as redux from 'react-redux';
import styles from './login.module.css';

class LoginPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            password: "",
        };
        this.handleChange = this.handleChange.bind(this);
        
    };

    
    onUsernameChange = event => {
        this.setState({ userName: event.target.value });
    }
    onPasswordChange = event => {
        this.setState({ password: event.target.value })
        
    }
    handleChange = (event) => {
        console.log(this.state);
        this.setState({ userName: event.target.value });
    }
onLogin = () => {
        //send login data to backend
};
    render() {
        
        return (
            <div className={styles.text}>
                <p>Login!</p>
                <p>Username</p>
                <input type="text" onChange={this.handleChange}></input>
                <p>Password</p>
                <input type="text"  onChange={ this.handleChange}></input>
                <Button><p>login</p></Button>
            </div>
        );
    }
}

export default LoginPage;