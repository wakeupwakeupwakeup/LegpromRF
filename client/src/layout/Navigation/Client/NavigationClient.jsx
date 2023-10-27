import styles from './NavigationClient.module.scss'

import ButtonNavigation from '@/src/UI/ButtonNavigation/ButtonNavigation';
import HeaderNavigation from '@/src/UI/HeaderNavigation/HeaderNavigation';

import Link from 'next/link'
import Image from 'next/image';
import { useRouter } from 'next/router'

import ad from 'public/icon/adPro.svg';

const NavigationClient = ({active, setActive}) => {

  const tarif = 'Pro'

  const router = useRouter()
  const pathname = router.pathname.split('/')

  return ( 
    <>
      <div onClick={() => setActive(false)}  className={active ? [styles.nav__bg, styles.nav__bg_active].join(' ') : styles.nav__bg}>
        <nav onClick={(e) => e.stopPropagation()} className={active ? [styles.nav, styles.nav__active].join(' ') : styles.nav}>
          <div className={styles.nav__content}>
            <div className={styles.nav__head}>
                <h2 className={styles.nav__title}>Кабинет</h2>
                <HeaderNavigation title="Global IT" mail="ekb-invest103@yandex.ru" tarif={tarif}/>
            </div>
            <div className={styles.nav__buttons}>
                <ButtonNavigation 
                  title="Главная" 
                  href="/profile/home" 
                  activeLink={
                  pathname[2] == 'home' 
                    ? 
                      true 
                    : 
                      false
                    }>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M5.2974 7.56134V13.0494" stroke="#242424" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M9.03073 4.93524V13.0494" stroke="#242424" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12.7035 10.4614V13.0494" stroke="#242424" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M12.7488 1H5.25167C2.63834 1 1.00024 2.84967 1.00024 5.46813V12.5319C1.00024 15.1503 2.63072 17 5.25167 17H12.7488C15.3698 17 17.0002 15.1503 17.0002 12.5319V5.46813C17.0002 2.84967 15.3698 1 12.7488 1Z" stroke="#242424" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                </ButtonNavigation>
                {
                  tarif == 'Pro' 
                  ? 
                    <ButtonNavigation 
                            title="Создать заказ" 
                            href="/profile/createorder/" 
                            activeLink={
                              pathname[2] == 'createorder' ||
                              pathname[2] == 'selection' 
                              ? 
                                true 
                              : 
                                false
                            }>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18" fill="none">
                              <path fillRule="evenodd" clipRule="evenodd" d="M10.1358 1.00977H4.34032C2.54645 1.00977 1 2.46386 1 4.25861V13.7107C1 15.6065 2.44451 16.9996 4.34032 16.9996H11.2998C13.0945 16.9996 14.5495 15.5054 14.5495 13.7107V5.60641L10.1358 1.00977Z" stroke="#242424" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M9.90723 1V3.53443C9.90723 4.77158 10.9083 5.77525 12.1454 5.77786C13.292 5.78048 14.4655 5.78135 14.5448 5.77612" stroke="#242424" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M9.7504 9.85554H5.48047" stroke="#242424" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M7.61531 11.9906V7.7207" stroke="#242424" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                    </ButtonNavigation> 
                  :
                    <ButtonNavigation 
                            title="Заказать пошив" 
                            href="/" 
                            activeLink={
                              pathname[2] == 'createorder' ||
                              pathname[2] == 'selection' 
                              ? 
                                true 
                              : 
                                false
                            }>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18" fill="none">
                              <path fillRule="evenodd" clipRule="evenodd" d="M10.1358 1.00977H4.34032C2.54645 1.00977 1 2.46386 1 4.25861V13.7107C1 15.6065 2.44451 16.9996 4.34032 16.9996H11.2998C13.0945 16.9996 14.5495 15.5054 14.5495 13.7107V5.60641L10.1358 1.00977Z" stroke="#242424" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M9.90723 1V3.53443C9.90723 4.77158 10.9083 5.77525 12.1454 5.77786C13.292 5.78048 14.4655 5.78135 14.5448 5.77612" stroke="#242424" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M9.7504 9.85554H5.48047" stroke="#242424" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M7.61531 11.9906V7.7207" stroke="#242424" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                    </ButtonNavigation>
                }
                <ButtonNavigation 
                        title="Управление заказами" 
                        href="/profile/orders/" 
                        activeLink={
                          pathname[2] == 'orders' ||
                          pathname[2] == 'applications' || 
                          pathname[2] == 'order' ||
                          pathname[2] == 'performers' || 
                          pathname[2] == 'archive' ||
                          pathname[2] == 'tailoring' || 
                          pathname[2] == 'change' ||
                          pathname[2] == 'offer'
                          ? 
                            true
                          : 
                            false
                        }>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                          <circle cx="9" cy="9" r="8" stroke="#242424" strokeWidth="1.3"/>
                          <path d="M8.5 5.5V9.5L12 11.5" stroke="#242424" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                </ButtonNavigation>
                <ButtonNavigation 
                        title="Новости" 
                        href="/profile/news" 
                        activeLink={
                          pathname[2] == 'news' 
                          ? 
                            true 
                          : 
                            false
                        }>
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
                          <path d="M11.3991 12.7099H5.12427" stroke="#242424" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M11.3991 9.07127H5.12427" stroke="#242424" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M7.51862 5.44138H5.12427" stroke="#242424" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                          <path fillRule="evenodd" clipRule="evenodd" d="M11.5667 1C11.5667 1 4.89465 1.00348 4.88422 1.00348C2.48552 1.01825 1.00024 2.59652 1.00024 5.00391V12.9961C1.00024 15.4156 2.49682 17 4.91638 17C4.91638 17 11.5875 16.9974 11.5988 16.9974C13.9975 16.9826 15.4837 15.4035 15.4837 12.9961V5.00391C15.4837 2.58436 13.9862 1 11.5667 1Z" stroke="#242424" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                </ButtonNavigation>
            </div>
            <div className={styles.nav__footer}>

                  {/*<div className={styles.nav__referal}>*/}
                  {/*    <div className="nav__profileContainer">*/}
                  {/*      <Link href="/nolayout">Реферальная программа</Link>*/}
                  {/*    </div>*/}
                  {/*</div>*/}

                  {/*<div className={styles.nav__ad}>*/}
                  {/*  {*/}
                  {/*    tarif !== 'Pro' */}
                  {/*    ? */}
                  {/*      <Link href="/">*/}
                  {/*        <Image */}
                  {/*            src={ad} */}
                  {/*            alt="LegpromRF"  */}
                  {/*            width={257} */}
                  {/*            height={212}*/}
                  {/*          />*/}
                  {/*      </Link>*/}
                  {/*    :*/}
                  {/*      null*/}
                  {/*  }*/}
                  {/*</div>*/}

                  <div className={styles.nav__wrapper}>
                      <div className={styles.footer__control}>
                          <div title="Меню" onClick={() => setActive(!active)} className={[styles.footer__contolButton, styles.footer__contolButton_collapse].join(' ')}>
                              {
                                  active
                                      ?
                                      '«'
                                      :
                                      "»"
                              }
                          </div>
                      </div>
                    {/*<div className={styles.nav__balance}>*/}
                    {/*  /!*<div className={styles.nav__money}>*!/*/}
                    {/*  /!*  <div className={styles.nav__money_number}>0 ₽</div>*!/*/}
                    {/*  /!*  <div className={styles.nav__money_text}>остаток счета</div>*!/*/}
                    {/*  /!*</div>*!/*/}
                    {/*  /!*<div className={styles.nav__buttonsFooter}>*!/*/}
                    {/*  /!*  <div className={styles.nav__button}>+</div>*!/*/}
                    {/*  /!*  <div className={styles.nav__button}>*!/*/}
                    {/*  /!*    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 10" fill="none">*!/*/}
                    {/*  /!*      <path d="M1 5.08335H11M11 5.08335L7.25 1M11 5.08335L7.25 9" stroke="#FAFAFA" strokeWidth="1.06364" strokeLinecap="round" strokeLinejoin="round"/>*!/*/}
                    {/*  /!*    </svg>*!/*/}
                    {/*  /!*  </div>*!/*/}
                    {/*  /!*</div>*!/*/}
                    {/*</div>*/}
                  </div>
            </div>
          </div>
        </nav>
      </div>
    </>
   );
}
 
export default NavigationClient;