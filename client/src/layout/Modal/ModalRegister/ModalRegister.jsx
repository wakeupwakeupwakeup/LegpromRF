import styles from './ModalRegister.module.scss';

import Link from "next/link";

import ModalLayout from '../ModalLayout';

import { useState } from 'react';
import { useRouter } from 'next/router'

const ModalLogin = (props) => {

    const router = useRouter()

    const [activeEmail, setActiveEmail] = useState(false);
    const [activePhone, setActivePhone] = useState(false);
    const [activePassword, setActivePassword] = useState(false);
    const [disabled, setDisabled] = useState(true)

    const handleEmail = (e) => {
        if (e.target.value.length > 0 ) {
            setActiveEmail(true);
        } else if (e.target.value.length === 0 ) {
            setActiveEmail(false);
        }
    }

    const handlePhone = (e) => {
        if (e.target.value.length > 0 ) {
            setActivePhone(true);
        } else if (e.target.value.length === 0 ) {
            setActivePhone(false);
        }
    }

    const handlePassword = (e) => {
        if (e.target.value.length > 0 ) {
            setActivePassword(true);
        } else if (e.target.value.length === 0 ) {
            setActivePassword(false);
        }
    }

    return (
        <ModalLayout {...props}>
            <form action="" className={styles.form}>
                <div className={styles.form__header}>
                    <div className={styles.form__loginTitle}>Регистрация</div>
                    <div className={styles.form__subtitle}>Уже зарегистрированы? <Link href={""}>Войти</Link></div>
                </div>
                <div className={styles.form__inputs}>
                    <input className={ activeEmail ? styles.form__inputActive : ''} onChange={handleEmail} type="text" placeholder="Почта"/>
                    <input className={ activePhone ? styles.form__inputActive : ''} onChange={handlePhone} type="text" placeholder="Номер телефона"/>
                    <input className={ activePassword ? styles.form__inputActive : ''} onChange={handlePassword} type="password" placeholder="Пароль"/>
                </div>
                <div>
                    <Link className={activeEmail && activePhone && activePassword ? [styles.form__buttonActive, styles.form__button].join(' ') : styles.form__button} href='/profile/home'>Зарегистрироваться</Link>
                </div>
                <div className={styles.form__footer}>
                    {/*<div className={styles.form__footerItem}>*/}
                    {/*    <Link href="/nolayout">Забыли пароль?</Link>*/}
                    {/*</div>*/}
                    {/*<div className={styles.form__footerItem}>*/}
                    {/*    <Link href="/register/step1">Нет аккаунта? Зарегистрируйтесь!</Link>*/}
                    {/*</div>*/}
                </div>
            </form>
        </ModalLayout>
    );
}

export default ModalLogin;
