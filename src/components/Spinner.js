import React from 'react'
import spinner from '../spinner.gif'

export default function Spinner() {
  return (
    <div className='container text-center mb-5'>
      <img src={spinner} alt="" />
    </div>
  )
}
