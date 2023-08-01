import styles from './ModalImage.module.scss'

const ModalImage = ({active, setActive, children}) => {
  return ( 
    <div className={active ? [styles.modal, styles.modal__active].join(' ') : styles.modal} onClick={() =>setActive(false)}>
      <div className={styles.modal__content} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
   );
}
 
export default ModalImage;