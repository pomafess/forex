import React from 'react';

import style from './Scroll.module.scss'

export const Scroll = (props) => {
  return( 
    <div className={style.scroll}>
      {props.children}
    </div>	
  );
}

