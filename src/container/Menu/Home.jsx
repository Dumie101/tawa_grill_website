import React, { useState } from 'react'
import Menu from './Menu'
import data from '../../constants/data'
import MenuList from './MenuList'

const Home = () => {
    const [meals] = useState(data)
    return (
        <div>
            <Menu title='Tawa Grill Menu' />
            <MenuList meals={meals.data}/>
        </div>
    );
}

export default Home