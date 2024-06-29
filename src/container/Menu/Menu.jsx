import React from 'react'
import './Menu.css';
import { useState } from 'react'
import { NavLink } from 'react-router-dom';

const data = [
	{
		title: 'All',
		link: '/',
	},
	{
		title: 'Breakfast',
		link: '/breakfast',
	},
	{
		title: 'Lunch',
		link: '/lunch',
	},
	{
		title: 'Dinner',
		link: '/dinner',
	},
	{
		title: 'Snacks',
		link: '/snacks',
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