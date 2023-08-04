import styles from './HeaderLanding.module.scss'
import { links } from './menu.data'

import Image from "next/image";
import { useState } from 'react';
import { useEffect } from 'react';

import Link from "next/link";
import Logo from 'public/logo.png'
import ModalLogin from '../Modal/ModalLogin/ModalLogin';

const HeaderLanding = () => {

  const [modalActive, setModalActive] = useState(false)
  const [activeMenu, setActiveMenu] = useState(false);

  useEffect( () => {
    if(activeMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [activeMenu])

  return ( 
    <header className={styles.header}>
      <div className="header__container">
        <div className={styles.header__wrapper}>
          <div className={styles.header__navBar}>
            <div className={styles.header__logo}>
                <Link href='/'>
                  <Image 
                    src={Logo} 
                    alt="LegpromRF"  
                    width={135} 
                    height={35}
                  />
                </Link>
            </div>
            <div 
              onClick={ () => setActiveMenu(!activeMenu)} 
              className={activeMenu ? [styles.header__burger, styles.header__menuActive].join(' ') : styles.header__burger}
            >
                <span></span>
            </div>
          </div>
          <div className={activeMenu ? [styles.header__content, styles.header__menuActive].join(' ') : styles.header__content}>
              <div className={styles.header__menu}>
                  <nav className={styles.header__nav}>
                    <ul className={styles.header__list}>
                      {links.map((link, index) => {
                        return (
                          <li className={styles.header__item} key={index}>
                            <Link  href={link.href} className={styles.header__link}>{link.nameViews}</Link>
                          </li>
                        )})}
                    </ul>
                  </nav>
              </div>
              <div className={styles.header__button}>
                <div className={styles.header__question}>
                  <Link href="/">Задать вопрос</Link>
                </div>
                <div className={styles.header__login} onClick={() => setModalActive(true)}>Войти</div>
                <ModalLogin active={modalActive} setActive={setModalActive}>
                </ModalLogin>
              </div>
          </div>
        </div>
      </div>
    </header>
   );
}
 
export default HeaderLanding;