import { IconButton } from '@mui/material'
import React, { useEffect, useState }  from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '../../shared/Button/Button'
import { toggleModal } from '../../store/reducers/commonSlice'
import { CheckoutModal } from '../CheckoutModal/CheckoutModal'
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import style from './Header.module.scss'

export const Header = ({ title, children }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light');
  const cart = useSelector((state) => state.cart.cart)  
  const dispatch = useDispatch()
  const onClick = (content) => {
    dispatch(toggleModal({isOpen: true, content}))
  }

  const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
        setTheme('light');
        }
        };
  useEffect(() => {
  localStorage.setItem('theme', theme);
  document.body.className = theme;
  }, [theme]);
  
  return (
    <header className={style.header}>
      <div className={`${style.container} ${style.flBox}`}>
        <div className={`App ${theme}`}>
          <IconButton sx={{ ml: 1}} onClick={toggleTheme} color="inherit">
            {theme === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </div>
        <h2 className={style.title}>{title}</h2>
        {cart.length > 0 && <Button buttonText={'Оформить заказ'} className={style.medium} onClick={() => onClick(<CheckoutModal />)} />}
      </div>
    </header>
  )
}
