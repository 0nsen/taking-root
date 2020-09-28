import React from 'react'
import Item from './Item/Item'

export function readMore() {
    if (document.querySelector('#more').style.display === 'none') {
        document.querySelector('#more').style.display = 'inline';
        document.querySelector('#read-more').innerHTML = 'Read Less';
      
    }
    else if (document.querySelector('#more').style.display === 'inline') {
        document.querySelector('#more').style.display = 'none';
        document.querySelector('#read-more').innerHTML = 'Read More';
    }
}

export function toProduct({match}) {
    return <Item link={match.params.productID} />
}

