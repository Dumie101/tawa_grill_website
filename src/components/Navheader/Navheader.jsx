import React from 'react'
import './Navheader.css'
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineAvTimer } from "react-icons/md";
import { BsDiamond } from "react-icons/bs";

const Navheader = () => {
  return (
    <div>
        <nav>
            <div className="nav-header">
                
                <div className="address_line">
                    <FaLocationDot />
                    <a href="https://www.google.ca/maps/place/Tawa+Grill/@44.6444563,-63.5728732,17z/data=!3m2!4b1!5s0x4b5a2234dc3b8f21:0x62dc1d4c08ea6109!4m6!3m5!1s0x4b5a2234cf40c3cb:0xc772ce5443340b40!8m2!3d44.6444525!4d-63.5702983!16s%2Fg%2F11cn8xr9nc?entry=ttu" className="address">1496 Lower Water Street, Halifax Nova Scotia, Canada</a>
                </div>

                <BsDiamond className="divider"/>


                <div className="time_line">
                  <MdOutlineAvTimer/>
                  <p className="time">Daily: 8:00 am to 10:00 pm</p>
                </div>

                <div className='spacing'></div>

                <div className="phone_line">
                    <FaPhoneAlt />
                    <a href="tel:(902)-422-0077" className="phone">+ 1-902-422-0077</a>
                </div>

                <BsDiamond className="divider"/>

                <div className="mail_line">
                    <MdOutlineEmail />
                    <a href="mailto:tawagrillhalifax@gmail.com" className="mail">tawagrillhalifax@gmail.com</a>
                </div>

            </div>
        </nav>
    </div>
  )
}

export default Navheader
