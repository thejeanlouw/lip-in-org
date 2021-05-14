import React from 'react';
import { Route } from 'react-router-dom'


import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import Collection from '../collection/collection.component';

const DonationPage = ({ match }) => {
        console.log(match)
        return(
            <div className='donation-page'>
                <Route exact path={`${match.path}`}  component={CollectionsOverview} />
                <Route path={`${match.path}/:collectionId`} component={Collection}/>
            </div>
        )
}

export default DonationPage;