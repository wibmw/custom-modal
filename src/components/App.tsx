import { ReactNode } from 'react'

const CustomModal = ({ isOpen, toggle, children }: IPropsModal) => {
  return (
    <>
      {/** *********** Modal ******************/}
      {isOpen ? (
        <div className='modal-overlay' onClick={toggle}>
          {/** *********** Onclick on the overlay, the modal closes ******************/}
          <div onClick={(e) => e.stopPropagation()} className='modal-box'>
            {/** *********** Children for custom content here ******************/}
            {children}
          </div>
        </div>
      ) : null}
    </>
  )
}

export default CustomModal

// Interfaces
interface IPropsModal {
  children?: ReactNode
  isOpen: boolean
  toggle: () => void
}
