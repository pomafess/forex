import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Catalog } from '../components/Catalog/Catalog'
import { Search } from '../components/Search/Search'
import { getAllProducts } from '../store/sunck/productsSunck'
import style from './MainPage.module.scss'

export const MainPage = () => {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getAllProducts())
  }, [])
  const products = useSelector((state) => state.products.allProducts)
 
  return (
    products.length > 0 && (
      <div className={`${style.container} ${style.wrapper}`}>
        <h1 className={style.title}>Спешите купить!</h1>
        <Catalog items={products} isNew={true}></Catalog>
        <Search products={products} />
        <Catalog items={products}></Catalog>
      </div>
    )
  )
}
