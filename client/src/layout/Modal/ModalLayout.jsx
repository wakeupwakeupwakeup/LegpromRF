import styles from './ModalLayout.module.scss'

import closeModal from 'public/icon/close.svg'

import Image from 'next/image';

const Modal = ({active, setActive, children, height}) => {
  return ( 
    <div className={active ? [styles.modal, styles.modal__active].join(' ') : styles.modal} onClick={() =>setActive(false)}>
      <div className={styles.modal__content} onClick={e => e.stopPropagation()}>
        <div className={styles.modal__close} onClick={() =>setActive(false)}>
          <Image
            src={closeModal}
            width={20}
            height={20}
          />
        </div>
        {children}
      </div>
    </div>
   );
}
 
export default Modal;