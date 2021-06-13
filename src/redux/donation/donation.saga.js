import { takeLatest, call, put } from 'redux-saga/effects'
import { convertCollectionsSnapshotToMap } from '../../firebase/firebase.functions';
import { firestore } from '../../firebase/firebase.utils';
import { fetchCollectionsFailure, fetchCollectionsSuccess } from './donation.actions';

import DonationActionTypes from './donation.types'

export function* fetchCollectionsAsync() {
    try{
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
        yield put(fetchCollectionsSuccess(collectionsMap))
    } catch(error) {
        yield put(fetchCollectionsFailure(error.message))
    }
}

export function* fetchCollectionsStart() {
    yield takeLatest(
        DonationActionTypes.FETCH_COLLECTIONS_START, 
        fetchCollectionsAsync
    );
}