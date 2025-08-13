/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import "../styles/Footer.css";

const Footer = ({onOpen}) => {
  return (
    <>
    <div className='footer'>
      <div className="box_logo">
        <div className="Logo"> 
          <svg width="30.000000" height="35.000000" viewBox="0 0 40 45" fill="none" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
	          <path id="矢量 124" d="M5.85 13.18L20 0L34.14 13.18C36.93 15.78 38.84 19.1 39.61 22.72C40.38 26.33 39.99 30.08 38.47 33.49C36.96 36.89 34.4 39.81 31.11 41.85C27.82 43.9 23.95 45 20 45C16.04 45 12.17 43.9 8.88 41.85C5.59 39.81 3.03 36.89 1.52 33.49C0 30.08 -0.39 26.33 0.38 22.72C1.15 19.1 3.06 15.78 5.85 13.18L5.85 13.18ZM22.22 22.21L22.22 12.89L12.22 26.36L17.77 26.36L17.77 35.68L27.77 22.21L22.22 22.21Z" fill="#008FFF" fill-opacity="1.000000" fill-rule="evenodd"/>
          </svg>
          <h1 ><a href="#">Чистые Воды</a></h1>
        </div>
        <div className="inf_logo">
          <p>Качественный сервис по ремонту и обслуживанию колодцев</p>
        </div>
      </div>
      <div className='services'>
        <h1>Услуги</h1>
        <div className="group">
          <div className="group1">
            <p>Установка колодцев</p>
            <p>Обслуживание колодцев</p>
          </div>
          <div className="group2">
            <p>Ремонт колодцев</p>
            <p onClick={onOpen}>Контактные данные</p>
          </div>
        </div>
      </div>
    </div>
    <div className='under'>
        <p>© 2025 Чистые Воды </p>
    </div>
    </>
  )
}

export default Footer