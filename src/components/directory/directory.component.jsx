import React from 'react';
import MenuItem from '../menu-item/menu-item.component'


class Directory extends React.Component {
    constructor(){
        super();
        this.state = {
            sections: [
                {
                    title: 'CHURCH',
                    imageUrl: 'https://images.unsplash.com/photo-1438032005730-c779502df39b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
                    id: 1
                },
                {
                    title: 'ORGANIZATION',
                    imageUrl: 'https://images.unsplash.com/photo-1438032005730-c779502df39b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
                    id: 2
                },
                {
                    title: 'EVENT',
                    imageUrl: 'https://images.unsplash.com/photo-1438032005730-c779502df39b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
                    id: 3
                },
                {
                    title: 'INDIVIDUAL',
                    imageUrl: 'https://images.unsplash.com/photo-1438032005730-c779502df39b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
                    id: 4,
                    size: 'large'
                },
                {
                    title: 'SUPPORT',
                    imageUrl: 'https://images.unsplash.com/photo-1438032005730-c779502df39b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
                    id: 5,
                    size: 'large'
                },
            ]
        }
    }

    render(){
        return(
        <div className='directory-menu'>
            {this.state.sections.map(({title, imageUrl, id, size})=>
                <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} subtitle={'DONATE NOW'}></MenuItem>
                )}
        </div>
        )
    }

}

export default Directory;