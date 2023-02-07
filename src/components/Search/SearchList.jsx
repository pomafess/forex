import React, { useState } from 'react'

import style from './Search.module.scss'

export const SearchList = ({ products }) => {

  return (
      <div>
          <ul >
            {products.length > 0 && products.map((item) => {
              return <li key={item.id} className={style.listItems}>
                        <div className={style.imgWrapper}>
                              <img src={item.thumbnail} alt={item.title} className={style.img}></img>
                        </div>
                        <div className={style.titleWrapper}>
                              <p className={style.title}>{item.title}</p>
                              <p className={style.price}>${item.price}</p>
                        </div>
                    </li>
            })}
          </ul>
    </div>
  )
}
