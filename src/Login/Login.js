import * as React from 'react';
import {Button, FormText} from 'react-bootstrap';
import * as redux from 'react-redux';
import styles from './login.module.css';

//eslint

var styleObj = {

    fontSize: 14,

    color: "#4a54f1",

    textAlign: "center",

    paddingTop: "100px",

}
class LoginPage extends React.Component{

    render() {
        return (
            <div>
                <p style={styleObj}>Hello World!!!</p>
                
            </div>
        );
    }
}

export default LoginPage;