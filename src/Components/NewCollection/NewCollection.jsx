import React, { useEffect, useState } from 'react'
import './NewCollection.css'
import { Item } from '../Items/Item'

export const NewCollection = () => {

  const [new_collection,set_NewCollection] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:4000/newcollections')
    .then((response)=>response.json())
    .then((data)=>set_NewCollection(data))
  },[])
  return (
    <div className='new_collections'>
        <h1>NEW COLLECTIONS</h1>
        <hr />
        <div className="collections">
            {new_collection.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}
