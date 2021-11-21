import React, { Component } from 'react';
import MenuItem from '../menu-item/menu-item';
import './directory.scss';
import sections from './dir-props'
import { uuid } from 'uuid';

class Directory extends Component {  
    // Setting state as a class field is preferred over setting state from the constructor. Less redundancy
    // the constructor is only called once, so changes in props won't be reflected in this component.
    state={
        sections: sections()
    }
    
    render() {
        const hats = this.state.sections.find(section => section.title === "HATS");
        const jackets = this.state.sections.find(section => section.title === "JACKETS");
        const sneakers = this.state.sections.find(section => section.title === "SNEAKERS");
        const womens = this.state.sections.find(section => section.title === "WOMENS");
        const mens = this.state.sections.find(section => section.title === "MENS");
        return (
            <div className="directory-menu">
                <div className="directory-first-row">
                    <MenuItem title={hats.title} imageUrl={hats.imageUrl} />
                    <MenuItem title={jackets.title} imageUrl={jackets.imageUrl} />
                    <MenuItem title={sneakers.title} imageUrl={sneakers.imageUrl} />
                </div>
                <div className="directory-second-row">
                    <MenuItem title={womens.title} imageUrl={womens.imageUrl} />
                    <MenuItem title={mens.title} imageUrl={mens.imageUrl} />
                </div>
            </div>
        )
    }
}
export default Directory;
