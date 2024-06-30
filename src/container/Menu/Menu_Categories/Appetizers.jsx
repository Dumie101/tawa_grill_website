import React from 'react'
import {useState} from 'react'
import Menu from '../Menu'
import MenuList from '../MenuList'
import data from '../../../constants/data'

const Appetizers = () => {
    const [meals]=useState(data)
  return (
    <div>
        <Menu title='Appetizers'></Menu>
        {meals && (
            <MenuList meals={meals.data.filter((meal)=>meal.type==='Appetizers')}/>
        )}
    </div>
  )
}

export default Appetizers