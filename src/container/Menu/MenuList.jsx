import React from 'react'
import data from '../../constants/data'
import { useState } from 'react'

const MenuList = ({meals}) => {
  return (
    <div className='meal-container'>
      {meals.map((meal) => (
        <div key={meal.id}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col">
              <div className='title-price'>
                <h5>{meal.title}</h5>
                <small>{meal.price}</small>
              </div>
              <div>
                <small className='ml-3 w-full'>--------------------------</small>
                <p className='para-menu'>{meal.para}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default MenuList