import React from 'react'
import './Menu.css';
import { useState } from 'react'
import { NavLink } from 'react-router-dom';

const data = [
	{
		title: 'Appetizers',
		link: '/Appetizers',
	},
	{
		title: 'Rice',
		link: '/Rice',
	},
	{
		title: 'Dinner',
		link: '/Dinner',
	},
	{
		title: 'Drinks',
		link: '/Drinks',
	},
	{
		title: 'Tandoori Specialities',
		link: '/Tandoori_Specialities',
	},
	{
		title: 'Biryani',
		link: '/Biryani',
	},
	{
		title: 'Tawa Specials',
		link: '/Tawa_Specials',
	},
	{
		title: 'Vegetarian Curries',
		link: '/Vegetarian_Curries',
	},
	{
		title: 'Paneer Curries',
		link: '/Paneer_Curries',
	},
	{
		title: 'Non-vegetarian Curries',
		link: '/Non_vegetarian_Curries',
	},
	{
		title: 'Hakka Specialities',
		link: '/Hakka_Specialities',
	},
];

const Menu = ({title}) => {
  const [navs] = useState(data);
  return (
    <div className="menu" id="menu">
      
	  <div>
        <h1>{title}</h1>
      </div>

	  <ul className="menu_items">
        {navs.map((nav, index) => (
          <li key={index} className='li'>
            <NavLink to={nav.link} className='navs'>
              {nav.title}
            </NavLink>
          </li>
        ))}
      </ul>


    </div>
  )
}

export default Menu