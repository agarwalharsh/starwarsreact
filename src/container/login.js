import React from "react";
import { userActionlogin } from '../_actions';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import  Login  from '../component/login';


function mapStateToProps(state) {
    return {
        state
    };
}

export default connect(mapStateToProps, { userActionlogin })(Login);
//export { connectedLoginPage as Login };