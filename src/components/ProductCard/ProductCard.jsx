import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Button } from '../../shared/Button/Button'
import { addProduct } from '../../store/reducers/cartSlice';

import styles from './ProductCard.module.scss'

export const ProductCard = ({ product, isNew }) => {
  const { images, title, price, description, id } = product;
  const [isActive, setIsActive] = useState(false)

  const dispatch = useDispatch()

  const onClick = (product) => {
    dispatch(addProduct(product))
  }
  setTimeout(() => {
    setIsActive(true)
  }, 400)

  return (
    <div className={isActive ? `${styles.card} ${styles.active}` : styles.card}>
      <div className={styles.flexBtn}>
        {isNew && <span className={styles.new}>НОВИНКА</span>}
        <div className={styles.imgWrapper} >
          <img src={images[0]} alt={title} className={styles.img} />
        </div>
        <div className={styles.fc}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.price}>${price}</p>
        </div>
        <p className={styles.description}>{description}</p>
      </div>
      <Button buttonText={'В корзину'} onClick={() => onClick(product)} />
    </div>
  )
}