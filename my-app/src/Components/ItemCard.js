import React, { useState } from 'react';
import data from './menuData'
import { useCart } from 'react-use-cart'
export default function ItemCard(Item) {
const {addItem}= useCart();
  return (
    <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4'>
    <div className='card p-0 overflow-hidden h-100 shadow'>
        <img src={Item.img} className='card-img-top img-fluid'/>
        <div className='card-body text-center'>
            <h5 className='card-title'><b>{Item.title}</b></h5>
            <p className='card-text'>${Item.price}</p>
            <button className='btn btn-success' onClick={()=>addItem(Item.item)}>Add To Cart</button>
        </div>
    </div>
    </div>
)}
