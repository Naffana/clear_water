import React from 'react'
import "../../styles/Module.css";

const Service = ({ isOpenService, onCloseService}) => {
   if (!isOpenService) return null;

  return (
    <div className='module inf install' onClick={e => e.target.className === 'backgr' && onCloseService()}>
    <div className="backgr">
    </div> 
    <div className='moduleInf'>
    <div className="exit"><p onClick={onCloseService}>X</p></div>
    <svg width="80.000000" height="80.000000" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
      <path id="矢量 42" d="M37.5 5L47.5 5C48.16 5 48.79 5.26 49.26 5.73C49.73 6.2 50 6.83 50 7.5L50 47.5C50 48.16 49.73 48.79 49.26 49.26C48.79 49.73 48.16 50 47.5 50L2.5 50C1.83 50 1.2 49.73 0.73 49.26C0.26 48.79 0 48.16 0 47.5L0 7.5C0 6.83 0.26 6.2 0.73 5.73C1.2 5.26 1.83 5 2.5 5L12.5 5L12.5 0L17.5 0L17.5 5L32.5 5L32.5 0L37.5 0L37.5 5ZM5 20L5 45L45 45L45 20L5 20ZM10 25L15 25L15 30L10 30L10 25ZM10 35L15 35L15 40L10 40L10 35ZM20 25L40 25L40 30L20 30L20 25ZM20 35L32.5 35L32.5 40L20 40L20 35Z" fill="#008FFF" fill-opacity="1.000000" fill-rule="evenodd"/>
    </svg>
    <h1>Обслуживание</h1>
    <p>Регулярное техническое обслуживание колодцев, 
      очистка, дезинфекция, проверка качества воды
      и состояния конструкции.
    </p>
    <ul class="list">
      <li>Очистка от ила и мусора</li>
      <li>Дезинфекция</li>
      <li>Проверка качества воды</li>
      <li>Профилактический осмотр</li>
    </ul>
    <div className="price">
      <h2>Цена ~ от 9999 бел.руб.</h2>
    </div>
    </div>
    </div>
  )
}

export default Service
