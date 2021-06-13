import { takeLatest, put, all, call } from 'redux-saga/effects'

import UserActionTypes from './user.types'

import { 
    auth, 
    googleProvider
} from '../../firebase/firebase.utils'
import {createUserProfileDocument} from '../../firebase/firebase.functions'
import { 
    signInFailed, 
    signInSuccess,
} from './user.actions';

export function* getSnapshotFromUserAuth(userAuth){
    try {
        const userProfileRef = yield call(createUserProfileDocument, userAuth.user);
        const userSnapshot = yield userProfileRef.get();
        yield put(signInSuccess({id: userSnapshot.id, ...userSnapshot.data()}))
    } catch(error) {
        yield put(signInFailed(error))
    }
}

export function* signInWithGoogle(){
    try {
        const userRef = yield auth.signInWithPopup(googleProvider);
        yield getSnapshotFromUserAuth(userRef);
    } catch(error) {
        yield put(signInFailed(error))
    }
}

export function* onGoogleSignInStart(){
    yield takeLatest(
        UserActionTypes.GOOGLE_SIGN_IN_START,
        signInWithGoogle
    )
}

export function* signInWithEmailAndPassword({payload:{email, password}}){
    try {
        const userRef = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapshotFromUserAuth(userRef);
    } catch(error) {
        yield put(signInFailed(error))
    }
}

export function* onEmailSignInStart(){
    yield takeLatest(
        UserActionTypes.EMAIL_SIGN_IN_START,
        signInWithEmailAndPassword
    )
}

export function* userSagas(){
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart)
    ])
}