import React from 'react'
import {useState} from 'react'
import Menu from '../Menu'
import MenuList from '../MenuList'
import data from '../../../constants/data'

const Rice = () => {
    const [meals]=useState(data)
  return (
    <div className="menu_section">
        <Menu title='Rice'></Menu>
        {meals && (
            <MenuList meals={meals.data.filter((meal)=>meal.type==='Rice')}/>
        )}
    </div>
  )
}

export default Rice