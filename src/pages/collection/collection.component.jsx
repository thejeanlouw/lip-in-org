import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionItem from '../../components/collection-item/collection-item.component'
import { selectDonationCollection } from '../../redux/donation/donation.selectors';
import './collection.styles.scss'

const Collection = ({collection}) => {
    const { title, items} = collection;
    return (
        <div className="collection-page">
            <h2 className="title">
                {title}
            </h2>
            <div className="items">
                {items.map(item=>
                    <CollectionItem key={item.id} {...item} />
                )}
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectDonationCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(Collection);
