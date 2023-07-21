import styles from './NavigationClient.module.scss'

import NavifationLayout from "../NavigationLayout/NavifationLayout";
import ButtonNavigation from '@/src/components/UI/ButtonNavigation/ButtonNavigation';import HeaderNavigation from '@/src/components/UI/HeaderNavigation/HeaderNavigation';

import Link from 'next/link'
import Image from 'next/image';

import ad from 'public/icon/adPro.svg';

const NavigationClient = (props) => {

  const tarif = 'Base'

  return ( 
    <NavifationLayout {...props}>
      <div className={styles.nav__head}>
        <h2 className={styles.nav__title}>Кабинет</h2>
        <HeaderNavigation title="Global IT" mail="ekb-invest103@yandex.ru" tarif={tarif}/>
      </div>
      <div className={styles.nav__buttons}>
        {
          tarif == 'Pro' 
          ? 
          <ButtonNavigation title="Создать заказ" href="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M10.1358 1.00977H4.34032C2.54645 1.00977 1 2.46386 1 4.25861V13.7107C1 15.6065 2.44451 16.9996 4.34032 16.9996H11.2998C13.0945 16.9996 14.5495 15.5054 14.5495 13.7107V5.60641L10.1358 1.00977Z" stroke="#242424" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9.90723 1V3.53443C9.90723 4.77158 10.9083 5.77525 12.1454 5.77786C13.292 5.78048 14.4655 5.78135 14.5448 5.77612" stroke="#242424" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9.7504 9.85554H5.48047" stroke="#242424" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7.61531 11.9906V7.7207" stroke="#242424" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </ButtonNavigation> 
          :
          <ButtonNavigation title="Заказать пошив" href="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M10.1358 1.00977H4.34032C2.54645 1.00977 1 2.46386 1 4.25861V13.7107C1 15.6065 2.44451 16.9996 4.34032 16.9996H11.2998C13.0945 16.9996 14.5495 15.5054 14.5495 13.7107V5.60641L10.1358 1.00977Z" stroke="#242424" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9.90723 1V3.53443C9.90723 4.77158 10.9083 5.77525 12.1454 5.77786C13.292 5.78048 14.4655 5.78135 14.5448 5.77612" stroke="#242424" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9.7504 9.85554H5.48047" stroke="#242424" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7.61531 11.9906V7.7207" stroke="#242424" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </ButtonNavigation>
        }
          <ButtonNavigation title="История заказов" href="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
              <circle cx="9" cy="9" r="8" stroke="#242424" strokeWidth="1.3"/>
              <path d="M8.5 5.5V9.5L12 11.5" stroke="#242424" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </ButtonNavigation>

          <ButtonNavigation title="Новости" href="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
              <path d="M11.3991 12.7099H5.12427" stroke="#242424" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M11.3991 9.07127H5.12427" stroke="#242424" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7.51862 5.44138H5.12427" stroke="#242424" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M11.5667 1C11.5667 1 4.89465 1.00348 4.88422 1.00348C2.48552 1.01825 1.00024 2.59652 1.00024 5.00391V12.9961C1.00024 15.4156 2.49682 17 4.91638 17C4.91638 17 11.5875 16.9974 11.5988 16.9974C13.9975 16.9826 15.4837 15.4035 15.4837 12.9961V5.00391C15.4837 2.58436 13.9862 1 11.5667 1Z" stroke="#242424" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </ButtonNavigation>
      </div>
      <div className={styles.nav__footer}>
          {
            tarif !== 'Pro' ? 
            <Link href="/">
              <Image 
                  src={ad} 
                  alt="LegpromRF"  
                  width={257} 
                  height={212}
                />
            </Link>
            :
            null
          }
          <div className={styles.nav__referal}>
            <Link href="/">Реферальная программа</Link>
          </div>
      </div>
    </NavifationLayout>
   );
}
 
export default NavigationClient;