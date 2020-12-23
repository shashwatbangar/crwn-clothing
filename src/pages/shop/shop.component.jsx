import React from 'react'
import SHOP_DATA from "./shop.data";
import '/Users/shashwatbangar/Desktop/ecommerce/crwn-clothing/src/components/preview-collection/collection-preview.component.jsx'
import CollectionPreview from '/Users/shashwatbangar/Desktop/ecommerce/crwn-clothing/src/components/preview-collection/collection-preview.component.jsx';

class ShopPage extends React.Component{
    constructor(){
        super();

        this.state = {
            collections : SHOP_DATA
                
        }
    }

    render(){
        const {collections} = this.state;
        return (<div className="shop-page">
            {collections.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ) )}
        </div>)
    }
}

export default ShopPage;
