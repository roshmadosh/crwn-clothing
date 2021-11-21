import React from 'react';
import MenuItem from '../menu-item/menu-item';
import './directory.scss';

const Directory = () => (
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

export default Directory;
