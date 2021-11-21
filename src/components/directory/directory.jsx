import React, { Component } from 'react';
import MenuItem from '../menu-item/menu-item';
import './directory.scss';
import { uuid } from 'uuid';

class Directory extends Component {  
    constructor(props){
        super(props);
        this.state={
            sections:[
            {
                title: "HATS",
                imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                id: 1
            },
            {
                title: "HATS",
                imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                id: 1
            },
            {
                title: "HATS",
                imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                id: 1
            },
            {
                title: "HATS",
                imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                id: 1
            },
            {
                title: "HATS",
                imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                id: 1
            }]
        }
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
