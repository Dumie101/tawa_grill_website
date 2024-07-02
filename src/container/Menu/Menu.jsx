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
		title: 'Indian Bread',
		link: '/Indian_Bread',
	},
	{
		title: 'Rice',
		link: '/Rice',
	},
	{
		title: 'Drinks & Desserts',
		link: '/Drinks_and_Desserts',
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
		link: '/Non_Vegetarian_Curries',
	},
	{
		title: 'Hakka Specialities',
		link: '/Hakka_Specialties',
	},
];


const Menu = ({title}) => {
  const [navs] = useState(data);
  return (
    <div className="menu_header_container" id="menu">

	  <p>Checkout our tasty menu</p>
	  <div className="menu_header_text">
      </div>


	<ul className="menu_items">
		{navs.map((nav, index) => (
		<li key={index} className='menu_links'>
			<NavLink to={nav.link} className='menu_navs'>
				{nav.title}
			</NavLink>
		</li>
		))}
	</ul>


    </div>
  )
}

export default Menu