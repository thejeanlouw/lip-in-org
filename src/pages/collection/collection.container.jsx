import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionsLoaded } from '../../redux/donation/donation.selectors';
import WithSpinner from '../with-spinner/with-spinner.component';
import Collection from './collection.component';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionsLoaded
})

const CollectionContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(Collection)

export default CollectionContainer;