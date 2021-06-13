import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionsLoaded } from '../../redux/donation/donation.selectors';
import WithSpinner from '../with-spinner/with-spinner.component';
import CollectionsOverview from './collections-overview.component';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionsLoaded
})

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverview)

export default CollectionsOverviewContainer;