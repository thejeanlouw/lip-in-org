import React from 'react';
import './sign-up.styles.scss'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import {auth} from '../../firebase/firebase.utils'
import {createUserProfileDocument} from '../../firebase/firebase.functions'

export default class Signup extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    render() {
        return (
            <div className='sign-up'>
                <h2>I do not have an account</h2>
                <span></span>
            </div>
        )
    }
}
