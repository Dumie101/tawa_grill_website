import React from 'react'
import {useState} from 'react'
import Menu from '../Menu'
import MenuList from '../MenuList'
import data from '../../../constants/data'

const Hakka_Specialties = () => {
    const [meals]=useState(data)
  return (
    <div className="menu_section">
        <Menu title='Hakka_Specialties'></Menu>
        {meals && (
            <MenuList meals={meals.data.filter((meal)=>meal.type==='Hakka_Specialties')}/>
        )}
    </div>
  )
}

export default Hakka_Specialties