import React, { useEffect } from 'react'

const Modal = ({ modalContent, closeModal }) => {
  useEffect(() => {
    setTimeout(() => {
      closeModal()
    }, 3000)
  }, [modalContent])
  return (
    <div className='modal'>
      <p>{modalContent}</p>
    </div>
  )
}

export default Modal
