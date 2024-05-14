import React, { useContext } from 'react'
import "./cards.css"
import axios  from 'axios'
import { MainProvider } from '../../context/GetProducts'

const Cards = () => {
    const {data,filterData,women,men,accessories,getData,basketData}=useContext(MainProvider)
  return (
    <section className='cards'>
        <div className="container">
            <div className="texts">
            <h1>New Arrivals</h1>
            <div className="line"></div>
            <div className="buttons">
                <button onClick={()=>{
                    getData()
                }}>ALL</button>
                <button onClick={()=>{
                    women()
                }}>WOMEN'S</button>
                <button
                onClick={()=>{
                    accessories()
                }}
                >ACCESSORIES</button>
                <button onClick={()=>{
                    men()
                }}>MEN'S</button>
            </div>
            </div>
            <div className="cardsSection">
                {filterData.map((elem)=>{
                    return <div className='card'>
                        <img className='imgg' src={elem.src} alt="" />
                        <p className='title'>{elem.title}</p>
                        <p className='price'>{`$${elem.price}`}</p>
                        <button className='addbasket' onClick={()=>{
                            let obj={
                                title:elem.title,
                                price:elem.price,
                                src:elem.src
                            }
                            const postBasket=async()=>{
                                await axios.post("http://localhost:3000/basket",obj)
                               }
                               postBasket()

                        }}
                        >Add to basket</button>
                    </div>
                
                })}
            </div>
        </div>
    </section>
  )
}

export default Cards
