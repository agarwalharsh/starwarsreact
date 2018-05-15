import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import '../Login.css';

export default class Login extends Component {
    constructor(props) {
        super(props);

        // reset login status
        //this.props.dispatch(userActions.logout());

        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    validateForm() {
        return this.state.username.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();

        const { userActionlogin } = this.props;
        const { username, password } = this.state;

        //this.setState({ submitted: true });

        userActionlogin({"username": username, "password":password});
    }

    render() {
        //console.log(this.props);
        //console.log(this.props.state.userLogin);
        const { state } = this.props;
        console.log(state);
        return (
            <div className="login">
                <h1>Login to enter the Star Wars Universe!</h1>

                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="username" bsSize="large">
                    <ControlLabel>Username</ControlLabel>
                    <FormControl
                        autoFocus
                        type="text"
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                    <ControlLabel>Password</ControlLabel>
                    <FormControl
                        value={this.state.password}
                        onChange={this.handleChange}
                        type="password"
                    />
                    </FormGroup>
                    <Button
                        block
                        bsSize="large"
                        disabled={!this.validateForm()}
                        type="submit"
                    >
                        Login
                    </Button>
                </form>

                {state && state.userLogin.failed &&
                    <h5>Incorrect Username/Password</h5>
                } 
            </div>
        );
    }
}