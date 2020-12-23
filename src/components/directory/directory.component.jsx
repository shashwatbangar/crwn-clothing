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
                id:1
        },
        {
                title:'jackets',
                imageURL:'https://i.ibb.co/px2tCc3/jackets.png',
                id:2   
        },
        {
            title:'sneakers',
            imageURL:'https://i.ibb.co/0jqHpnp/sneakers.png',
            id:3 
        },
        {
            title:'womens',
            imageURL:'https://i.ibb.co/GCCdy8t/womens.png',
            id:4 ,
            size:'large'
        },
        {
            title:'mens',
            imageURL:'https://i.ibb.co/R70vBrQ/mens.png',
            id:5,
            size:'large'
        }]
        }
    }

    render(){
        return(
            <div className="directory-menu">
                 {this.state.sections.map(({title,imageURL,id,size}) => (
                     <MenuItem key={id} title={title} imageURL={imageURL} size={size} />
                 ))}
            </div>
        )
    }
}

export default Directory;