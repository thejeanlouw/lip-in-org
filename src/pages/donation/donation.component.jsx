import React from 'react';
import LIP_IN_DATA from '../../data/raw-js/lip-in-data'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'

class DonationPage extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            collections: LIP_IN_DATA
        }
    }

    render(){
        const {collections} = this.state;
        return(
            <div className='donation-page'>
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
}

export default DonationPage;