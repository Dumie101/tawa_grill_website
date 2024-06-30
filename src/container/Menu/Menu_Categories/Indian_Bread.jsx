import React from 'react'
import {useState} from 'react'
import Menu from '../Menu'
import MenuList from '../MenuList'
import data from '../../../constants/data'

const Indian_Bread = () => {
    const [meals]=useState(data)
  return (
    <div>
        <Menu title='Indian_Bread'></Menu>
        {meals && (
            <MenuList meals={meals.data.filter((meal)=>meal.type==='Indian_Bread')}/>
        )}
    </div>
  )
}

export default Indian_Bread