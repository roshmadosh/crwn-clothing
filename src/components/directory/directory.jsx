import React, { Component } from 'react';
import MenuItem from '../menu-item/menu-item';
import './directory.scss';
import sections from './dir-props'
import { uuid } from 'uuid';

class Directory extends Component {  
    // Setting state like this is preferred over setting state from the constructor. Less redundancy
    // the constructor is only called once, so changes in props won't be reflected in this component.
    state={
        sections: [sections]
    }
    
    render() {
        return (
            <div className="directory-menu">
                <div className="directory-first-row">
                    <MenuItem title="HATS" />
                    <MenuItem title="JACKETS" />
                    <MenuItem title="SNEAKERS" />   
                </div>
                <div className="directory-second-row">
                    <MenuItem title="WOMENS" />
                    <MenuItem title="MENS" />
                </div>
            </div>
        )
    }
}
export default Directory;
