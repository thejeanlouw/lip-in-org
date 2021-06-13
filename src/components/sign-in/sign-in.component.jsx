import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss'

import {
    googleSignInStart, 
    emailSignInStart, 
    facebookSignInStart
} from '../../redux/user/user.actions'
import { connect } from 'react-redux';


class SignIn extends React.Component{

    state = {
        email: '',
        password: ''
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { emailSignInStart } = this.props;
        const {email, password} = this.state;
        
        emailSignInStart(email, password);
    }
    
    handleChange = event =>{
        const {value, name} = event.target;
        this.setState({[name]: value});
    }

    render(){
        const { googleSignInStart } = this.props;
        const { email, password } = this.state;
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput handleChange={this.handleChange} value={email} label='email' type='email' name='email' required/>
                    <FormInput handleChange={this.handleChange} value={password} label='password' type='password' name='password' required/>
                    <div className='buttons'>
                        <CustomButton type='submit'>Sign in</CustomButton>
                        <CustomButton type='button' isGoogleSignIn onClick={googleSignInStart}>Sign In With Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password})),
    facebookSignInStart: () => dispatch(facebookSignInStart())
})

export default connect(null, mapDispatchToProps)(SignIn);