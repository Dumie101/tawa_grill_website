import React from 'react'
import data from '../../constants/data'
import { useState } from 'react'

const MenuList = ({meals}) => {
  return (
    <div className='meal-container'>
      {meals.map((meal) => (
        <div className="menu_list_container" key={meal.id}>
          <div>
            
            <div className="menu_list_item_container">
              
              <div className="menu_list_header_container">
                <h5>{meal.title}</h5>
                <small>{meal.price}</small>
              </div>

              <div className="menu_list_para_container">
                <h5>{meal.para}</h5>
              </div>

            </div>

          </div>

        </div>
      ))}
    </div>
  )
}

export default MenuList