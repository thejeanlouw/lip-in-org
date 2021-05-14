import React from 'react';
import MenuItem from '../menu-item/menu-item.component'
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectDirectorySections } from '../../redux/directory/directory.selectors'


function Directory({sections}) {
    return (
        <div className='directory-menu'>
            {sections.map(({id, ...otherSectionProps})=>
                <MenuItem key={id} subtitle={'DONATE NOW'} {...otherSectionProps}></MenuItem>
                )}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);