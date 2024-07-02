import React from 'react'
import {useState} from 'react'
import Menu from '../Menu'
import MenuList from '../MenuList'
import data from '../../../constants/data'

const Non_Vegetarian_Curries = () => {
    const [meals]=useState(data)
  return (
    <div className="menu_section">
        <Menu title='Non_Vegetarian_Curries'></Menu>
        {meals && (
            <MenuList meals={meals.data.filter((meal)=>meal.type==='Non_Vegetarian_Curries')}/>
        )}
    </div>
  )
}

export default Non_Vegetarian_Curries