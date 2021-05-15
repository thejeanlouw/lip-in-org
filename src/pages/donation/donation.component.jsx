import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom'


import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import { convertCollectionsSnapshotToMap } from '../../firebase/firebase.functions';
import { firestore } from '../../firebase/firebase.utils';
import { updateDonationCollections } from '../../redux/donation/donation.actions';
import Collection from '../collection/collection.component';

class DonationPage extends Component {

    unsubscribeFromSnapshot = null;

    componentDidMount(){
        const collectionRef = firestore.collection('collections');
        collectionRef.onSnapshot(async snapshot => {
            debugger;
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            debugger;
            this.props.updateDonationCollections(collectionsMap);
        })
    }

    render(){
        const {match} = this.props;
        return(
            <div className='donation-page'>
                <Route exact path={`${match.path}`}  component={CollectionsOverview} />
                <Route path={`${match.path}/:collectionId`} component={Collection}/>
            </div>
        )}
}

const mapDispatchToProps = dispatch => ({
    updateDonationCollections: collectionMap => dispatch(updateDonationCollections(collectionMap))
})

export default connect(null,mapDispatchToProps)(DonationPage);