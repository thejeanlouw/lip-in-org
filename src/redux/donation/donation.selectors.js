import { createSelector } from 'reselect'

export const donationSelector = state => state.donations;

export const donationCollectionSelector = createSelector(
    [donationSelector],
    donations => donations.collections
)


export const donationFetchingSelector = createSelector(
    [donationSelector],
    donations => donations.isFetching
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
    collections => (collections ? collections[collectionUrlParam] : null)
)

export const selectIsCollectionsLoaded = createSelector(
    [donationCollectionSelector],
    collections => !!collections
)