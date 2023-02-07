import { Button } from '../../shared/Button/Button'
import React, { useEffect, useState, useMemo } from 'react'
import { ProductCard } from '../ProductCard/ProductCard'

import style from './Catalog.module.scss'

export const Catalog = ({ items, isNew }) => {
  const [visibleData, setVisibleData] = useState(9)
  let [count, setCount] = useState(0)
  
  useEffect(() => {
    if (sliceData.length > count) {
      setTimeout(() => setCount(
        count + 1
      ), 100);
    }
  }, [count])

  const newItems = useMemo(
    () => {
    const arr = items.filter((item) => {
    return item.category === 'groceries'
    }).slice(0, 3)
      return arr
    },
    [items],
  )
   
  const sliceData = useMemo(
    () => {
      return items.slice(0, visibleData)
    })

  const loadMore = () => {
    setVisibleData(visibleData + visibleData)
     setCount(
        count + 1
      )
  }

  return (
      <>
        <ul className={isNew ? `${style.catalog} ${style.new}` : style.catalog}>
        {isNew ? newItems.map((item) => {
            return <li key={item.id} ><ProductCard product={item} isNew={isNew}></ProductCard></li>
          })
          :
          sliceData.slice(0, count).map((item) => {
            return <li key={item.id} ><ProductCard product={item} isNew={isNew}></ProductCard></li>
            } 
          )}
        </ul>
      {(items.length !== sliceData.length && !isNew) && <Button buttonText={'Загрузить еще'} onClick={() => loadMore()} className={style.medium} />}
      </>  
  )
}
