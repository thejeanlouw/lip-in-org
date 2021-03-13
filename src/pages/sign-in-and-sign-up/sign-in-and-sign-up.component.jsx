import { render } from '@testing-library/react';
import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import Signup from '../../components/sign-up/sign-up.component';
import './sign-in-and-sign-up.styles.scss';



class SignInAndSignUpPage extends React.Component{

    constructor(props){
        super(props);
    }

    

    render(){
        return(
            <div className='sign-in-sign-up'>
                <SignIn />
                <Signup />
            </div>
        );
    }
}

export default SignInAndSignUpPage;