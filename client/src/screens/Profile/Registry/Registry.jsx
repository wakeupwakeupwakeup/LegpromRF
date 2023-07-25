import Layout from "@/src/layout/Layout";
import RegistryCard from "@/src/components/RegistryCard/RegistryCard";

import styles from './Registry.module.scss'

import Link from "next/link";



const Registry = () => {
  return ( 
    <Layout>
      <div className={styles.registry}>
        <h3 className={styles.registry__title}>Реестр заказов</h3>
        <div className={styles.registry__head}>
          <div className={styles.registry__list}>
            <div className={styles.registry__item}><Link href="/profile/registry/">Все заказы</Link></div>
            <div className={[styles.registry__item, styles.registry__item_archive].join(' ')}><Link href="/profile/registry/">Архивные заказы</Link></div>
          </div>
          <div className={styles.registry__status}>
            <div className={styles.registry__descriptions}>Памятка статусов:</div>
            <div className={styles.registry__statusItem}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M0 0H16.3091C18.3475 0 20 1.65248 20 3.69091V20L0 0Z" fill="#0036FF"/>
                <path d="M20 20H3.69091C1.65248 20 0 18.3475 0 16.3091V0L20 20Z" fill="#002BCD"/>
                <circle cx="9.99993" cy="9.99993" r="3.18182" fill="white"/>
              </svg>
              <span>В работе</span>
            </div>
            <div className={styles.registry__statusItem}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M0 0H16.3091C18.3475 0 20 1.65248 20 3.69091V20L0 0Z" fill="#00B334"/>
                <path d="M20 20H3.69091C1.65248 20 0 18.3475 0 16.3091V0L20 20Z" fill="#00902A"/>
                <circle cx="9.99993" cy="9.99993" r="3.18182" fill="white"/>
              </svg>
              <span>Закончен</span>
            </div>
            <div className={styles.registry__statusItem}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M0 0H16.3091C18.3475 0 20 1.65248 20 3.69091V20L0 0Z" fill="#FF0A00"/>
                <path d="M20 20H3.69091C1.65248 20 0 18.3475 0 16.3091V0L20 20Z" fill="#CD0A02"/>
                <circle cx="9.99993" cy="9.99993" r="3.18182" fill="white"/>
              </svg>
              <span>Отменен</span>
            </div>
          </div>
        </div>
        <div className={styles.registry__cards}>

          <RegistryCard 
            title='Пошив платья для официантов' 
            number='№24500968' 
            edition='250' 
            datePublic='25.03.2023' 
            dateChange='24.06.2023' 
            budget='500 000' 
            region='Ростовская область' 
            alt='Описание' 
            status='В работе'
          />

          <RegistryCard 
            title='Пошив платья для официантов' 
            number='№24500968' 
            edition='250' 
            datePublic='25.03.2023' 
            dateChange='24.06.2023' 
            budget='500 000' 
            region='Ростовская область' 
            alt='Описание' 
            status='Отменен'
          />

          <RegistryCard 
            title='Пошив платья для официантов' 
            number='№24500968' 
            edition='250' 
            datePublic='25.03.2023' 
            dateChange='24.06.2023' 
            budget='500 000' 
            region='Ростовская область' 
            alt='Описание' 
            status='Закончен'
          />

          <RegistryCard 
            title='Пошив платья для официантов' 
            number='№24500968' 
            edition='250' 
            datePublic='25.03.2023' 
            dateChange='24.06.2023' 
            budget='500 000' 
            region='Ростовская область' 
            alt='Описание' 
            status='Закончен'
          />

          <RegistryCard 
            title='Пошив платья для официантов' 
            number='№24500968' 
            edition='250' 
            datePublic='25.03.2023' 
            dateChange='24.06.2023' 
            budget='500 000' 
            region='Ростовская область' 
            alt='Описание' 
            status='Закончен'
          />

<RegistryCard 
            title='Пошив платья для официантов' 
            number='№24500968' 
            edition='250' 
            datePublic='25.03.2023' 
            dateChange='24.06.2023' 
            budget='500 000' 
            region='Ростовская область' 
            alt='Описание' 
            status='В работе'
          />

          <RegistryCard 
            title='Пошив платья для официантов' 
            number='№24500968' 
            edition='250' 
            datePublic='25.03.2023' 
            dateChange='24.06.2023' 
            budget='500 000' 
            region='Ростовская область' 
            alt='Описание' 
            status='Отменен'
          />

          <RegistryCard 
            title='Пошив платья для официантов' 
            number='№24500968' 
            edition='250' 
            datePublic='25.03.2023' 
            dateChange='24.06.2023' 
            budget='500 000' 
            region='Ростовская область' 
            alt='Описание' 
            status='Закончен'
          />

          <RegistryCard 
            title='Пошив платья для официантов' 
            number='№24500968' 
            edition='250' 
            datePublic='25.03.2023' 
            dateChange='24.06.2023' 
            budget='500 000' 
            region='Ростовская область' 
            alt='Описание' 
            status='Закончен'
          />

          <RegistryCard 
            title='Пошив платья для официантов' 
            number='№24500968' 
            edition='250' 
            datePublic='25.03.2023' 
            dateChange='24.06.2023' 
            budget='500 000' 
            region='Ростовская область' 
            alt='Описание' 
            status='Закончен'
          />
        </div>
      </div>
    </Layout>
   );
}
 
export default Registry;