import styles from './ModalLogin.module.scss';

import Link from "next/link";

import ModalLoyout from '../ModalLayout';

import { useState } from 'react';

const ModalLogin = (props) => {

  const [activeInput1, setActiveInput1] = useState(false);
  const [activeInput2, setActiveInput2] = useState(false);
  const [disabled, setDisabled] = useState(true)

  const handleChange1 = (e) => {
    if (e.target.value.length > 0 ) {
      setActiveInput1(true);
    } else if (e.target.value.length === 0 ) {
      setActiveInput1(false);
    }
  }

  const handleChange2 = (e) => {
    if (e.target.value.length > 0 ) {
      setActiveInput2(true);
    } else if (e.target.value.length === 0 ) {
      setActiveInput2(false);
    }
  }



  return ( 
    <ModalLoyout {...props}>
      <form action="" className={styles.form}>
        <div className={styles.form__loginTitle}>Вход</div>
        <div className={styles.form__inputs}>
          <input className={ activeInput1 ? styles.form__inputActive : ''} onChange={handleChange1} type="text" placeholder="Номер телефона или почта"/>
          <input className={ activeInput2 ? styles.form__inputActive : ''} onChange={handleChange2} type="password" placeholder="Пароль"/>
        </div>
       <div className={activeInput1 && activeInput2 ? [styles.form__buttonActive, styles.form__button].join(' ') : styles.form__button}>
          <button 
          disabled={activeInput1 && activeInput2 ? false : true}
          >Войти</button>
       </div>
       <div className={styles.form__footer}>
        <div className={styles.form__footerItem}>
          <span>Забыли пароль?</span>
        </div>
        <div className={styles.form__footerItem}>
          <Link href="/">Нет аккаунта? Зарегистрируйтесь!</Link>
        </div>
       </div>
      </form>
    </ModalLoyout>
   );
}
 
export default ModalLogin;
