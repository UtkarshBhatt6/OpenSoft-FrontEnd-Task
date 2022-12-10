import React from 'react'
import data from './menuData'
export default function ChefCard(chef) {
  return (
    <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4'>
    <div className='card p-0 overflow-hidden h-100 shadow'>
        <img src={chef.img} className='card-img-top img-fluid'/>
        <div className='card-body text-center'>
            <h5 className='card-title'>{chef.title}</h5>
            <p className='card-text'>{chef.text}</p>
            <ion-icon name="logo-whatsapp" size='large'><a href={chef.contact}>Whatsapp</a></ion-icon>
        </div>
    </div>

    </div>
  )
}
