import React from 'react'

export default function LineItems(props) {
    const {items} = props;

    let itemElements = [];
    if (items){
        for (var i = 0; i < items.length; i++){
            const item = items[i];
            itemElements.push((
                <div className="row mb-2" key={item.id}>
                    <div className="col-5 offset-1">
                        <img src={item.variant.image.src} className="img-fluid" />
                    </div>
                    <div className="col-6 my-auto">
                        <span className="font-weight-bold">{ item.title }</span><br />
                        <span>{ item.variant.title } ({ item.quantity })</span><br />
                        <span className="font-weight-bold">${ item.variant.price }</span>
                    </div>
                </div>
            ))
        }
    }

    return (
        <div>
            {itemElements}
        </div>
    )
}
