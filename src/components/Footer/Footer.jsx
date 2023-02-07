import React from 'react'

import style from './Footer.module.scss'

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={`${style.container} ${style.flBox}`}>
        <address className={style.address}>
            Наши контакты: <br />
            <a href="tel:+3800000000">+380 000 00 00</a><br />
              город Примеров, улица Пушкина, дом <br />
              Колотушкина
          </address>
        <div className={style.text}>
          <a href="#">Доставка</a> <br />
          <a href="#">Дополнительная информация</a> <br />
          <a href="#">Про нас</a>
        </div>
      </div>
    </footer>
  )
}
