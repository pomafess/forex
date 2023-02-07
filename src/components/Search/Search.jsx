import React, { useState } from 'react'
import {Input} from '../../shared/Input/Input'
import { Scroll } from '../../shared/Scroll/Scroll'
import { SearchList } from './SearchList'
import FilterAltIcon from '@mui/icons-material/FilterAlt';

import style from './Search.module.scss'

export const Search = ({products}) => {
    const [searcValue, setSearchValue] = useState('')
    const [searchShow, setSearchShow] = useState(false); 

    const handleChange = (e) => {
        setSearchValue(e.target.value);
    if(e.target.value===''){
      setSearchShow(false);
    }
    else {
      setSearchShow(true);
    }
      }
      
    const filtredProducts = products.filter(item => {
          return item.title.toLowerCase().includes(searcValue.toLowerCase())
      })
    
    return (
      <div className={style.search}>
        <div className={style.input}>
           <Input
              type='text'
              name='search'
              value={searcValue}
              id='search'
              onChange={e => handleChange(e)}
              placeholder={'Поиск...'}
                isSearch={true} />
            {searchShow && <Scroll><SearchList products={filtredProducts}/></Scroll>}
        </div>
        <div className={style.btnWrapper}>
          <button className={style.button}><FilterAltIcon sx={{ fill: 'rgba(99, 44, 44, 0.76)'}}/></button>
        </div>
      </div>
    )
}
