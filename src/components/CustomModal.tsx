import { ReactNode } from 'react'

const CustomModal = ({ isOpen, toggle, children }: IPropsModal) => {
  return (
    <>
      {/** *********** Modal ******************/}
      {isOpen ? (
        <div style={ModalOverlay} onClick={toggle}>
          {/** *********** Onclick on the overlay, the modal closes ******************/}
          <div onClick={(e) => e.stopPropagation()} style={ModalBox}>
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

// Styles
const ModalOverlay = {
  width: '100vw',
  height: '100vh',
  top: '0',
  background: 'rgba(0, 0, 0, 0.7)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: '9999',
  container: {
    position: 'fixed',
  },
}

const ModalBox = {
  display: 'block',
  background: 'white',
  padding: '3rem',
  borderRadius: '1rem',
}
