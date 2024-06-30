import React from 'react'
import {useState} from 'react'
import Menu from '../Menu'
import MenuList from '../MenuList'
import data from '../../../constants/data'

const Tandoori_Specialities = () => {
    const [meals]=useState(data)
  return (
    <div>
        <Menu title='Tandoori_Specialities'></Menu>
        {meals && (
            <MenuList meals={meals.data.filter((meal)=>meal.type==='Tandoori_Specialities')}/>
        )}
    </div>
  )
}

export default Tandoori_Specialities