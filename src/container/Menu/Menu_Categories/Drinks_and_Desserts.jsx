import React from 'react'
import {useState} from 'react'
import Menu from '../Menu'
import MenuList from '../MenuList'
import data from '../../../constants/data'

const Drinks_and_Desserts = () => {
    const [meals]=useState(data)
  return (
    <div>
        <Menu title='Drinks_and_Desserts'></Menu>
        {meals && (
            <MenuList meals={meals.data.filter((meal)=>meal.type==='Drinks_and_Desserts')}/>
        )}
    </div>
  )
}

export default Drinks_and_Desserts