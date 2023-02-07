import React from 'react'

import style from './ThankYouPage.module.scss'

export const ThankYouPage = ({ name, lastName, dispatch, action }) => {
    setTimeout(() => {
        dispatch(action({ isOpen: false, content: null}))
    }, 3000)
  return (
      <div>
          <h2 className={style.title}>Поздравляем Вас {name} {lastName} с успешной покупкой!!!</h2>  
      </div>
  )
}
