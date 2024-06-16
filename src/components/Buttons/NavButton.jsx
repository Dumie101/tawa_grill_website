import React from 'react'
import './NavButton.css';

const nav_button = () => {
  return (
    <div>
        <button class="button">
          <span class="button_lg">
            <span class="button_sl"></span>
            <span class="button_text">Find a table</span>
          </span>
        </button>
    </div>
  )
}

export default nav_button
