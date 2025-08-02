import React from 'react'
import "../styles/Header.css";

const Header = () => {
  return (
    <div className='Header'>
      <div className="Logo"> 
        <svg width="40.000000" height="45.000000" viewBox="0 0 40 45" fill="none" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
	      <path id="矢量 124" d="M5.85 13.18L20 0L34.14 13.18C36.93 15.78 38.84 19.1 39.61 22.72C40.38 26.33 39.99 30.08 38.47 33.49C36.96 36.89 34.4 39.81 31.11 41.85C27.82 43.9 23.95 45 20 45C16.04 45 12.17 43.9 8.88 41.85C5.59 39.81 3.03 36.89 1.52 33.49C0 30.08 -0.39 26.33 0.38 22.72C1.15 19.1 3.06 15.78 5.85 13.18L5.85 13.18ZM22.22 22.21L22.22 12.89L12.22 26.36L17.77 26.36L17.77 35.68L27.77 22.21L22.22 22.21Z" fill="#008FFF" fill-opacity="1.000000" fill-rule="evenodd"/>
        </svg>
        <h1>Чистые Воды</h1>
      </div>
      <div className='Menu'>
        <div className='line'>
          <hr />
        </div>
        <div className="MenuBar">
            <p>Ремонт колодцев</p>
            <p>Обслуживание колодцев</p>
            <p>Установка новых колодцев</p>
        </div>
        </div>
        <div className='Call'>
          <div className="call_button">
          <p>Позвонить</p>
          <svg width="20" height="20" viewBox="0 0 24.375 24.375" fill="none" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
	          <path id="矢量 13" d="M8.12 0L8.12 3.25L18.83 3.25L0 22.08L2.29 24.37L21.12 5.54L21.12 16.25L24.37 16.25L24.37 0L8.12 0Z" fill="#444444" fill-opacity="1.000000" fill-rule="evenodd"/>
          </svg>
         </div>
        </div>
    </div>
  )
}

export default Header