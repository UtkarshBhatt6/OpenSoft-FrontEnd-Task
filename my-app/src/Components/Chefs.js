import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './stylesheet.css'
import data from './menuData';
import ChefCard from './ChefCard';
function Chefs() {
  return (
    <>
     <h1 id='4'className='text mt-3'>Chefs</h1>
        <section className='py-4 container'>
          <div className='row justify-content-center'>
            {data.chefData.map((item)=>{
              return(
                <ChefCard img={item.source} title={item.name} text={item.text} contact={item.contact}/>
              )
            })}
            
          </div>
        </section>
    </>
  );
}

export default Chefs;