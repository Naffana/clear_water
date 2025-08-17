import React from 'react'
import "../../styles/Module.css";

const Installation = ( { isOpenInstall, onCloseInstall}) => {
   if (!isOpenInstall) return null;

  return (
    <div className='module inf install' onClick={e => e.target.className === 'backgr' && onCloseInstall()}>
    <div className="backgr">
    </div> 
    <div className='moduleInf'>
    <div className="exit"><p onClick={onCloseInstall}>X</p></div>
    <svg width="100.000000" height="100.000000" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
      <path id="矢量 63" d="M39.18 14.28L39.18 0L47.29 0C48.01 0 48.7 0.25 49.2 0.69C49.71 1.14 50 1.74 50 2.38L50 11.9C50 12.53 49.71 13.14 49.2 13.58C48.7 14.03 48.01 14.28 47.29 14.28L39.18 14.28ZM33.78 47.61C33.78 48.25 33.49 48.85 32.99 49.3C32.48 49.74 31.79 50 31.08 50L20.27 50C19.55 50 18.86 49.74 18.35 49.3C17.85 48.85 17.56 48.25 17.56 47.61L17.56 14.28L0 14.28L0 9.7C0 9.28 0.12 8.87 0.35 8.51C0.59 8.15 0.93 7.85 1.34 7.64L16.21 0L33.78 0L33.78 47.61Z" fill="#008FFF" fill-opacity="1.000000" fill-rule="evenodd"/>
    </svg>
    <h1>Установка колодцев</h1>
    <p>Профессиональное строительство колодцев 
      с использованием качественных материалов. 
      Выбор оптимального места, копка, установка колец.
    </p>
    <ul class="list">
      <li>Поиск водоносного слоя</li>
      <li>Установка бетонных колец</li>
      <li>Обустройство дна</li>
      <li>Герметизация швов</li>
    </ul>
    <div className="price">
      <h2>Цена ~ от 9999 бел.руб.</h2>
    </div>
    </div>
    </div>
  )
}

export default Installation

