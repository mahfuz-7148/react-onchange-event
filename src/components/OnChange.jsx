import React, { useState } from 'react'

const OnChange = () => {

    const [name, setName] = useState('Guest')
    const [quantity, setQuantity] = useState(1)
    const [shipping, setShipping] = useState('Delivery')

    const nameChange = e => {
        setName(e.target.value)
    }
    const quantityChange = e => {
        setQuantity(e.target.value)
    }
    const shippingChange = e => {
        setShipping(e.target.value)
    }
  return (
    <div className='p-5'>
        <input className='p-2 outline-none rounded-3xl' value={name} onChange={nameChange} />
        <p className='p-2 text-2xl'>Name: {name}</p>

        <input className='p-2 outline-none rounded-3xl' value={quantity} onChange={quantityChange} type='number' />
        <p className='p-2 text-2xl'>Quantity: {quantity}</p>

        <label className='p-2 text-2xl flex justify-center items-center gap-2'>
          <input className='w-5 h-5' value='Pick up' onChange={shippingChange} type='radio' checked={shipping === 'Pick up'} /> Pick up
        </label> <br />

        <label className='p-2 text-2xl flex justify-center items-center gap-2'>
          <input className='w-5 h-5' value='Delivery' onChange={shippingChange} type='radio' checked={shipping === 'Delivery'} /> Delivery
        </label>

        <p className='p-2 text-2xl'>Shipping: {shipping}</p>
    </div>
  )
}

export default OnChange