import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '../../shared/Button/Button'
import { toggleModal } from '../../store/reducers/commonSlice'
import { CheckoutModal } from '../CheckoutModal/CheckoutModal'
import style from './Header.module.scss'

const Header = ({ title }) => {
  const cart = useSelector((state) => state.cart.cart)  
  const dispatch = useDispatch()
  const onClick = (content) => {
    dispatch(toggleModal({isOpen: true, content}))
  }
  return (
    <header className={style.header}>
      <div className={`${style.container} ${style.flBox}`}>
        <h2 className={style.title}>{title}</h2>
        {cart.length > 0 && <Button buttonText={'Оформить заказ'} className={style.medium} onClick={()=> onClick(<CheckoutModal/>)} />}
      </div>
    </header>
  )
}

export default Header