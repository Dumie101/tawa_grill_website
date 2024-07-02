import React from 'react'
import {useState} from 'react'
import Menu from '../Menu'
import MenuList from '../MenuList'
import data from '../../../constants/data'

const Biryani = () => {
    const [meals]=useState(data)
  return (
    <div className="menu_section">
        <Menu title='Biryani'></Menu>
        {meals && (
            <MenuList meals={meals.data.filter((meal)=>meal.type==='Biryani')}/>
        )}
    </div>
  )
}

export default Biryani