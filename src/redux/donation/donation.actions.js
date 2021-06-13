import { convertCollectionsSnapshotToMap } from '../../firebase/firebase.functions'
import { firestore } from '../../firebase/firebase.utils'
import DonationActionTypes from './donation.types'

export const fetchCollectionsStart = () => ({
    type: DonationActionTypes.FETCH_COLLECTIONS_START
})

export const fetchCollectionsSuccess = collectionsMap => ({
    type: DonationActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
})

export const fetchCollectionsFailure = error => ({
    type: DonationActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: error
})
