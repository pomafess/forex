import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm'
import { Button } from '../../shared/Button/Button';
import { Input } from '../../shared/Input/Input';
import { postOrder } from '../../store/reducers/cartSlice';
import { toggleModal } from '../../store/reducers/commonSlice';
import { ThankYouPage } from '../ThankYouPage/ThankYouPage';

import style from './CheckoutModal.module.scss'

export const CheckoutModal = () => {
  const cart = useSelector((state) => state.cart.cart)  
  const dispatch = useDispatch();

  const onSubmit = formData => {
      dispatch(postOrder(formData));
      dispatch(toggleModal({
          isOpen: true,
          content: <ThankYouPage
              name={formData.name}
              lastName={formData.lastName}
              dispatch={dispatch}
              action={toggleModal} />
      }))
    };

  const { formData, handleChange, handleSubmit } = useForm(
        { name: '', lastName: '', tel: '', email: '' },
        onSubmit
    );
    
    return (
        <div className={style.form}>
            <h3 className={style.title}>Ваш заказ</h3>
            <ul>
                {cart.map((item) => {
                    return <li className={style.text} key={item.id}>{`${item.title} - $${item.price}`}</li>
            })}
            </ul>
            <h3 className={style.title}>Информация для доставки</h3>
            <form className={style.form} onSubmit={handleSubmit}>
                <Input
                    type='text'
                    labelText='Имя'
                    name='name'
                    value={formData.name}
                    id='name'
                    onChange={handleChange}
                />
                <Input
                    type='text'
                    labelText='Фамилия'
                    name='lastName'
                    value={formData.lastName}
                    id='lastName'
                    onChange={handleChange}
                />
                <Input
                    type='tel'
                    labelText='Телефон'
                    name='tel'
                    value={formData.tel}
                    id='tel'
                    onChange={handleChange}
                />
                <Input
                    type='email'
                    labelText='Почта'
                    name='email'
                    value={formData.email}
                    id='email'
                    onChange={handleChange}
                />
                <Button type='submit' buttonText='КУПИТЬ' className={style.medium}/>
            </form>
        </div> 
  )
}
