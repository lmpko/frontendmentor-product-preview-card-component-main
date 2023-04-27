import React from 'react'

import mobileIMG from '/images/image-product-mobile.jpg'
import cartIMG from '/images/icon-cart.svg'

const CardComponent = () => {
  return (
    <section className='card'>
        <img src={mobileIMG} alt=""/>
        <aside>
            <span>Perfume</span>
            <h1>Gabrielle Essence Eau De Parfum</h1>
            <p> A floral, solar and voluptuous interpretation composed by Olivier Polge, 
                Perfumer-Creator for the House of CHANEL.</p>
            <div className='price'>
                <div>$149.99</div>
                <div>$169.99</div>
            </div>
            <button>
              <img src={cartIMG} alt=""/>
              <span> Add to Cart</span> 
            </button>
        </aside>
    </section>
  )
}

export default CardComponent