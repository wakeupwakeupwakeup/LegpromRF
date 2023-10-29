import styles from './ModalLogin.module.scss';

import Link from "next/link";

import ModalLayout from '../ModalLayout';

import { useState } from 'react';
import { useRouter } from 'next/router'

const ModalLogin = (props) => {

  const router = useRouter()

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
    <ModalLayout {...props}>
      <form action="" className={styles.form}>
        <div className={styles.form__loginTitle}>Вход</div>
        <div className={styles.form__inputs}>
          <input className={ activeInput1 ? styles.form__inputActive : ''} onChange={handleChange1} type="text" placeholder="Номер телефона или почта"/>
          <input className={ activeInput2 ? styles.form__inputActive : ''} onChange={handleChange2} type="password" placeholder="Пароль"/>
        </div>
       <div>
        <Link className={activeInput1 && activeInput2 ? [styles.form__buttonActive, styles.form__button].join(' ') : styles.form__button} href='/profile/home'>Войти</Link>
       </div>
       <div className={styles.form__footer}>
        <div className={styles.form__footerItem}>
          <Link href="/nolayout">Забыли пароль?</Link>
        </div>
        <div className={styles.form__footerItem}>
          <Link href="/register/step1">Нет аккаунта? Зарегистрируйтесь!</Link>
        </div>
       </div>
      </form>
    </ModalLayout>
   );
}
 
export default ModalLogin;
