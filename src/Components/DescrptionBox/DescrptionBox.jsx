import React from 'react'
import './DescrptionBox.css'

export const DescrptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className='descriptionbox-navigator'>
            <div className='descrptionbox-nav-box'>Desciption</div>
            <div className='descrptionbox-nav-box fade'>Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
          <p>
            An e-commmerce website is an outline platform that facilitate buying and selling
            of products or services over the internet. It serves as a virtual marketplace where businesses are and 
            individuals can showcase their products, interact with customers and transactions without the need for a physical
            presence E-Commerce websites have gained immense popularity due to their convinience, accessibility, and the global reach they offer.</p>
            <p>
            E-commerce websites typically display products or services along with detailed description, image prices and any available variations (e.g sizes, color). Each product usually has its own
            dedicated page with relevant information.</p>
        </div>
    </div>
  )
}
