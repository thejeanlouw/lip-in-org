import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import {  selectCollectionsForPreview } from '../../redux/donation/donation.selectors'
import CollectionPreview from '../collection-preview/collection-preview.component'
import './collections-overview.styles.scss'

const CollectionsOverview = ({ collections }) => {
    return (
        <div className="collections-overview">
            {
                collections.map(({id, ...otherProps})=>(
                    <div className='collection' key={id}>
                        <CollectionPreview key={id} {...otherProps} />
                    </div>
                ))
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})


export default connect(mapStateToProps)(CollectionsOverview)