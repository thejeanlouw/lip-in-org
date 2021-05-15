import { createSelector } from 'reselect'

export const donationSelector = state => state.donations;

export const donationCollectionSelector = createSelector(
    [donationSelector],
    donations => donations.collections
)

export const selectCollectionsForPreview = createSelector(
    [donationCollectionSelector],
    collections =>  collections ?
                    Object.keys(collections)
                    .map( key => collections[key]) :
                    []
)

export const selectDonationCollection = collectionUrlParam =>
createSelector(
    [donationCollectionSelector],
    collections => collections[collectionUrlParam]
)