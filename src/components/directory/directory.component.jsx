import React from 'react'
import MenuItem from "../menu-item/menu-item.component.jsx"
import "/Users/shashwatbangar/Desktop/ecommerce/crwn-clothing/src/components/directory/directory.styles.scss"

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
        {
                title:'hats',
                imageURL:'https://i.ibb.co/cvpntL1/hats.png',
                id:1,
                linkURL:'hats'
        },
        {
                title:'jackets',
                imageURL:'https://i.ibb.co/px2tCc3/jackets.png',
                id:2,
                linkURL:''   
        },
        {
            title:'sneakers',
            imageURL:'https://i.ibb.co/0jqHpnp/sneakers.png',
            id:3,
            linkURL:'' 
        },
        {
            title:'womens',
            imageURL:'https://i.ibb.co/GCCdy8t/womens.png',
            id:4 ,
            size:'large',
            linkURL:''
        },
        {
            title:'mens',
            imageURL:'https://i.ibb.co/R70vBrQ/mens.png',
            id:5,
            size:'large',
            linkURL:''
        }]
        }
    }

    render(){
        return(
            <div className="directory-menu">
                 {this.state.sections.map(({id, ...otherSectionProps}) => (
                     <MenuItem key={id} {...otherSectionProps} />
                 ))}
            </div>
        )
    }
}

export default Directory;