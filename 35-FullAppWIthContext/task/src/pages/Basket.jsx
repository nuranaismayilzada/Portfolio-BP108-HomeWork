import React from 'react'
import { useContext } from 'react'
import { MainProvider } from '../context/GetProducts'
import Button from 'react-bootstrap/Button';
import "./basket.css"

const Basket = () => {
    const { basketData,deletegetBasket } = useContext(MainProvider)
    return <>
        <div className='basketcards'>
            {
                basketData.map((elem) => {
                    return <div className='basketcard'>
                        <img className='imgg' src={elem.src} alt="" />
                        <p className='title'>{elem.title}</p>
                        <p className='price'>{`$${elem.price}`}</p>
                        <span className='plas'>+</span>
                        <button className='count'>0</button>
                        <span className='minus'>-</span>
                        <Button className='delbtn' variant="danger"
                        onClick={()=>{
                            deletegetBasket(elem.id)
                        }}
                        >Delete</Button>{' '}
                    </div>
                })
            }
        </div>
    </>
}

export default Basket
