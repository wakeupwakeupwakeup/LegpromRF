import styles from './ModalLayout.module.scss'

const Modal = ({active, setActive, children}) => {
  return ( 
    <div className={active ? [styles.modal, styles.modal__active].join(' ') : styles.modal} onClick={() =>setActive(false)}>
      <div className={styles.modal__content} onClick={e => e.stopPropagation()}>
        <div className={styles.modal__close} onClick={() =>setActive(false)}>Х</div>
        {children}
      </div>
    </div>
   );
}
 
export default Modal;