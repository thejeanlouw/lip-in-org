import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom'
import { createStructuredSelector } from 'reselect';



import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import { fetchCollectionsStart } from '../../redux/donation/donation.actions';
import { donationFetchingSelector, selectIsCollectionsLoaded } from '../../redux/donation/donation.selectors';
import Collection from '../collection/collection.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(Collection);

class DonationPage extends Component {

    componentDidMount(){
        this.props.fetchCollectionsStart();
    }

    render(){
        const {match, isFetching, isCollectionLoaded} = this.props;
        debugger;
        return(
            <div className='donation-page'>
                <Route exact path={`${match.path}`}  render={(props)=><CollectionsOverviewWithSpinner isLoading={!isCollectionLoaded || isFetching} {...props} />} />
                <Route path={`${match.path}/:collectionId`} render={(props)=><CollectionPageWithSpinner isLoading={!isCollectionLoaded || isFetching} {...props} />} />
            </div>
        )}
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

const mapStateToProps = createStructuredSelector({
    isFetching: donationFetchingSelector,
    isCollectionLoaded: selectIsCollectionsLoaded
})


export default connect(mapStateToProps,mapDispatchToProps)(DonationPage);