import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleModal } from '../../store/reducers/commonSlice'

import style from './Modal.module.scss'

export const Modal = () => {
    const {modalData} = useSelector((state) => state.common)
    const dispatch = useDispatch()

  return (
    <div className={modalData.isOpen ? `${style.modal} ${style.active}` : style.modal} onClick={() => dispatch(toggleModal(false))}>
          <div className={modalData.isOpen ? `${style.content} ${style.active}` : style.content} onClick={e => e.stopPropagation()}>
              {modalData.content}
          </div>  
    </div>
  )
}
