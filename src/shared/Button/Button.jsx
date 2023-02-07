import React from 'react';

import styles from './Button.module.scss'

export const Button = ({ buttonText, onClick, type = 'button', className }) => {
  return (
      <button className={`${className} ${styles.btn}`} type={type} onClick={onClick} >
      {buttonText}</button>
  );
}
