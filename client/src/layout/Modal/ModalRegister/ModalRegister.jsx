import styles from './ModalRegister.module.scss';

import Link from "next/link";

import ModalLayout from '../ModalLayout';

import { useState } from 'react';
import { useRouter } from 'next/router'
import {useForm} from "react-hook-form";

const ModalLogin = (props) => {

    const router = useRouter()
    const {register, handleSubmit} = useForm({
        defaultValues: {
            email: '',
            phone: '',
            password: ''
        }
    })
    const [activeEmail, setActiveEmail] = useState(false);
    const [activePhone, setActivePhone] = useState(false);
    const [activePassword, setActivePassword] = useState(false);
    const [disabled, setDisabled] = useState(true)

    const handleInput = (e, field) => {
        const value = e.target.value;
        switch (field) {
            case 'email':
                setActiveEmail(value.length !== 0);
                break;
            case 'phone':
                setActivePhone(value.length !== 0);
                break;
            case 'password':
                setActivePassword(value.length !== 0);
                break;
            default:
                break;
        }
    }

    const submit = data => {

    }

    const inputStyles = active => active ? [styles.form__inputActive, styles.form__input].join(' ') : styles.form__input;


    return (
        <ModalLayout {...props}>
            <form action="" className={styles.form} onSubmit={handleSubmit(submit)}>
                <div className={styles.form__header}>
                    <div className={styles.form__loginTitle}>Регистрация</div>
                    <div className={styles.form__subtitle}>Уже зарегистрированы? <Link href={""}>Войти</Link></div>
                </div>
                <div className={styles.form__inputs}>
                    <input {...register(email)} className={inputStyles(activeEmail)} onChange={(e) => handleInput(e, 'email')} type="text" placeholder="Почта"/>
                    <input {...register(phone)} className={inputStyles(activePhone)} onChange={(e) => handleInput(e, 'phone')} type="text" placeholder="Номер телефона"/>
                    <input {...register(password)} className={inputStyles(activePassword)} onChange={(e) => handleInput(e, 'password')} type="password" placeholder="Пароль"/>
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
