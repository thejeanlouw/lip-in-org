import UserActionTypes from './user.types'


export const googleSignInStart = () => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_START
});


export const emailSignInStart = (emailAddressAndPassword) => ({
    type: UserActionTypes.EMAIL_SIGN_IN_START,
    payload: emailAddressAndPassword
});

export const facebookSignInStart = () => ({
    type: UserActionTypes.FACEBOOK_SIGN_IN_START
});


export const signInSuccess = (user) => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_SUCCESS,
    payload: user
});

export const signInFailed = (error) => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_FAILED,
    payload: error
});