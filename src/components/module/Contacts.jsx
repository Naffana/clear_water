import React from 'react'
import "../../styles/Module.css";
const Contacts = ( { isOpenContacts, onCloseContacts}) => {
   if (!isOpenContacts) return null;

  return (
    <div  className='module' onClick={e => e.target.className === 'backgr' && onCloseContacts()}>
      <div className="backgr">
      </div>
      <div className="contacts">
      <div className="exit"><p onClick={onCloseContacts}>X</p></div>
      <div className="Contact_header">
        <h1>Получить консультацию</h1>
        <p>Звоните в любое время - мы работаем ежедневно</p>
      </div>
      <div className="phone">
        <svg width="30.000000" height="30.000000" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
	        <path id="矢量 19" d="M47.25 34.38C43.83 34.38 40.52 33.83 37.44 32.83C36.47 32.5 35.38 32.75 34.63 33.5L30.27 38.97C22.41 35.22 15.05 28.13 11.13 20L16.55 15.38C17.3 14.61 17.52 13.52 17.22 12.55C16.19 9.47 15.66 6.16 15.66 2.75C15.66 1.25 14.41 0 12.91 0L3.3 0C1.8 0 0 0.66 0 2.75C0 28.55 21.47 50 47.25 50C49.22 50 50 48.25 50 46.72L50 37.13C50 35.63 48.75 34.38 47.25 34.38Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="evenodd"/>
        </svg>
        <p>+375 (25) 669-15-18</p>
      </div>
      <hr />
      <div className="information">
        <div className="geo">
          <svg width="25.000000" height="35.000000" viewBox="0 0 35 50" fill="none" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
	          <path id="矢量 49" d="M17.5 0C7.82 0 0 7.82 0 17.5C0 30.62 17.5 50 17.5 50C17.5 50 35 30.62 35 17.5C35 7.82 27.17 0 17.5 0ZM17.5 23.75C14.05 23.75 11.25 20.95 11.25 17.5C11.25 14.04 14.05 11.25 17.5 11.25C20.95 11.25 23.75 14.04 23.75 17.5C23.75 20.95 20.95 23.75 17.5 23.75Z" fill="#008FFF" fill-opacity="1.000000" fill-rule="evenodd"/>
          </svg>
          <div className='info'>
          <h2>Обслуживаемые районы</h2>
          <p>Витебск, Витебская область и прилегающие районы</p>
          </div>
        </div>
        <div className="time">
          <svg width="25.769226" height="25.769043" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
	          <path id="Icon" d="M25.3846 0C11.4231 0 0 11.4229 0 25.3848C0 39.3462 11.4231 50.769 25.3846 50.769C39.3462 50.769 50.7692 39.3462 50.7692 25.3848C50.7692 11.4229 39.3462 0 25.3846 0ZM25.3847 44.4233C14.9136 44.4233 6.34625 35.8564 6.34625 25.3853C6.34625 14.9141 14.9136 6.34668 25.3847 6.34668C35.8559 6.34668 44.4232 14.9141 44.4232 25.3853C44.4232 35.8564 35.8559 44.4233 25.3847 44.4233ZM28.558 24.4346C28.558 24.8574 28.6638 25.2808 28.9811 25.5981L34.9042 31.627C35.5388 32.2617 35.5388 33.2134 34.9042 33.8481L32.683 36.0693C32.0484 36.7036 31.0965 36.7036 30.4619 36.0693L22.6349 28.2422C22.4234 27.9248 22.2119 27.502 22.2119 27.0786L22.2119 14.2808C22.2119 13.4346 22.9522 12.6943 23.7984 12.6943L26.9715 12.6943C27.8176 12.6943 28.558 13.4346 28.558 14.2808L28.558 24.4346Z" clip-rule="evenodd" fill="#008FFF" fill-opacity="1.000000" fill-rule="evenodd"/>
          </svg>
          <div className="info">
          <h2>Режим работы</h2>
          <p>Ежедневно с 8:00 до 20:00</p>
          </div>
        </div>
      </div>
      <div className="Contact_footer">
        <h2>БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ И ОЦЕНКА ОБЪЕМА РАБОТЫ</h2>
      </div>
      </div>
    </div>
  )
}

export default Contacts