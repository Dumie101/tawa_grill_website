import React from 'react'
import {useState} from 'react'
import Menu from '../Menu'
import MenuList from '../MenuList'
import data from '../../../constants/data'

const Paneer_Curries = () => {
    const [meals]=useState(data)
  return (
    <div className="menu_section">
        <Menu title='Paneer_Curries'></Menu>
        {meals && (
            <MenuList meals={meals.data.filter((meal)=>meal.type==='Paneer_Curries')}/>
        )}
    </div>
  )
}

export default Paneer_Curries