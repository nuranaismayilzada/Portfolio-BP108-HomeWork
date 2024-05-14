import React from 'react'
import "./secondcards.css"

const SecondCards = () => {
  return (
    <section>
        <div className='container'>
            <div className='bestSellers'>
                <h1>Best Sellers</h1>
                <div className='line'></div>
                <div className='cartsWrapper'>
                    <div className='cartt'>
                        <div className='img'>
                        <img src="https://preview.colorlib.com/theme/coloshop/images/product_1.png.webp" />
                        </div>
                       <div className='txt'>
                       <p>Fujifilm X100T 16 MP Digital Camera (Silver)</p>
                        <span>$520.00</span>
                       </div>
                    </div>
                    <div className='cartt'>
                        <div className='img'>
                        <img src="https://preview.colorlib.com/theme/coloshop/images/product_2.png" />

                        </div>
                       <div className='txt'>
                       <p>Samsung CF591 Series Curved 27-Inch FHD Monitor</p>
                        <span>$520.00</span>
                       </div>
                    </div>
                    <div className='cartt'>
                        <div className='img'>
                        <img src="	https://preview.colorlib.com/theme/coloshop/images/product_3.png" />

                        </div>
                        <div className='txt'>
                        <p>Blue Yeti USB Microphone Blackout Edition</p>
                        <span>$520.00</span>
                        </div>
                    </div>
                    <div className='cartt'>
                        <div className='img'>
                        <img src="	https://preview.colorlib.com/theme/coloshop/images/product_4.png" />

                        </div>
                        <div className='txt'>
                        <p>DYMO LabelWriter 450 Turbo Thermal Label Printer</p>
                        <span>$520.00</span>
                        </div>
                    </div>
                    <div className='cartt'>
                        <div className='img'>
                        <img src="	https://preview.colorlib.com/theme/coloshop/images/product_5.png" />

                        </div>
                        <div className='txt'>
                        <p>Pryma Headphones, Rose Gold & Grey</p>
                        <span>$520.00</span>
                        </div>
                    </div>

                </div>

            </div>


        </div>
      
    </section>
  )
}

export default SecondCards