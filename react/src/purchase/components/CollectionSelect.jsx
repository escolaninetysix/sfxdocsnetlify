import React from 'react'
import { PurchaseContext } from '../contexts/PurchaseContext'
import collections from '../data/collections';
import '../styles/collection-select.css'

const collectionList = collections;

export default function CollectionSelect() {
    const [state, setState] = React.useContext(PurchaseContext);

    const handleCollectionChange = (event) => {
        event.preventDefault();
        const data = event.target.dataset;
        const stateNew ={...state};
        const collection = findCollectionById(data.collectionid);
        if(!collection) return;
        stateNew.collectionId = collection.id;
        stateNew.defaults = collection.defaults;
        setState(stateNew);
    }

    const listItems = [];
    collectionList.forEach(c => {
        const isSelected = state.collectionId == c.id;
        const linkClass = isSelected ? 'collection-option selected' : 'collection-option';
        listItems.push(
            <React.Fragment key={c.id}>
                <li className='collection-list-item'>
                    <a href='#' data-collectionid={c.id} onClick={state.loading ? null : handleCollectionChange} className={linkClass}>
                        {c.title}
                    </a>
                </li>
                <hr className='collection-divider' />
            </React.Fragment>
        )
        
    })

    return (
        <div className='text-center' id='navContainer'>
            <div style={{ position: 'sticky', top: '115px' }}>
                <h4 id='navTitle'>Products</h4>
                <ul className='list-unstyled' style={{fontSize: '10pt !important'}} id='navStore'>
                    {listItems}
                </ul>
            </div>
        </div>
    )
}

const findCollectionById = id => {
    const collection = collections.find(item => {
        return id == item.id;
    });
    return collection;
}