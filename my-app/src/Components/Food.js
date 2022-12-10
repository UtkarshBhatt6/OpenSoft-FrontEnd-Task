import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import './stylesheet.css'
import data from './menuData'
import ItemCard from './ItemCard';
import MenuNavbar from './MenuNavbar';
const Snacks = () => {
      
      return(
        <>
        <MenuNavbar/>
        <h1 className='text-center mt-3' id='A1'>Breakfast</h1>
        <section className='py-4 container'>
          <div className='row justify-content-center'>
            {data.breakFastData.map((item)=>{
              return(
                <ItemCard img={item.source} title={item.name} price={item.text} id={item.id} item={item}/>
              )
            })}
            
          </div>
        </section>
        <h1 className='text-center mt-3' id='A2'>Lunch</h1>
        <section className='py-4 container'>
          <div className='row justify-content-center'>
            {data.lunchData.map((item)=>{
              return(
                <ItemCard img={item.source} title={item.name} price={item.text} id={item.id} item={item}/>
              )
            })}
            
          </div>
        </section>
        <h1 className='text-center mt-3' id='A3'>Snacks</h1>
        <section className='py-4 container'>
          <div className='row justify-content-center'>
            {data.snacksData.map((item)=>{
              return(
                <ItemCard img={item.source} title={item.name} price={item.text} id={item.id} item={item}/>
              )
            })}
            
          </div>
        </section>
        <h1 className='text-center mt-3' id='A4'>Dinner</h1>
        <section className='py-4 container'>
          <div className='row justify-content-center'>
            {data.dinnerData.map((item)=>{
              return(
                <ItemCard img={item.source} title={item.name} price={item.text} id={item.id} item={item}/>
              )
            })}
            
          </div>
        </section>
        </>
      );
    }
export default Snacks;
