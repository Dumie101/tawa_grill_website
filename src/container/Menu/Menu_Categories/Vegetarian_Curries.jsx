import React from 'react'
import {useState} from 'react'
import Menu from '../Menu'
import MenuList from '../MenuList'
import data from '../../../constants/data'

const Vegetarian_Curries = () => {
    const [meals]=useState(data)
  return (
    <div>
        <Menu title='Vegetarian_Curries'></Menu>
        {meals && (
            <MenuList meals={meals.data.filter((meal)=>meal.type==='Vegetarian_Curries')}/>
        )}
    </div>
  )
}

export default Vegetarian_Curries