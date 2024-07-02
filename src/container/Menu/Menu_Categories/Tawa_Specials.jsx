import React from 'react'
import {useState} from 'react'
import Menu from '../Menu'
import MenuList from '../MenuList'
import data from '../../../constants/data'

const Tawa_Specials = () => {
    const [meals]=useState(data)
  return (
    <div className="menu_section">
        <Menu title='Tawa_Specials'></Menu>
        {meals && (
            <MenuList meals={meals.data.filter((meal)=>meal.type==='Tawa_Specials')}/>
        )}
    </div>
  )
}

export default Tawa_Specials