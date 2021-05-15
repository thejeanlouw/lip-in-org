import DonationActionTypes from './donation.types'

export const updateDonationCollections = (collectionsMap) => ({
    type: DonationActionTypes.UPDATE_COLLECTIONS,
    payload: collectionsMap
})