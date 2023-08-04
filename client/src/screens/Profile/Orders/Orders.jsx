import Layout from "@/src/layout/Layout";

import styles from './Orders.module.scss'

import Status from "@/src/components/Status/Status";
import TitleProfile from "@/src/components/TitleProfile/TitleProfile";
import OrdersCard from "@/src/components/OrdersCard/OrdersCard";
import HeaderProfile from "@/src/components/HeaderProfile/HeaderProfile";

import Link from "next/link";

const Orders = () => {
  return ( 
    <Layout>
      <div className={styles.orders}>
        <TitleProfile>Статусы заказов</TitleProfile>
        <div className={styles.orders__header}>
          <div className={styles.orders__list}>
            <HeaderProfile title="Все заказы" number="1" href='/' active={true}/>
            <HeaderProfile title="Архивные заказы" number="2" href='/' active={false}/>
          </div>
          <div className={styles.orders__status}><Status /></div>
        </div>
      </div>    
      <div className={styles.orders__cards}>
      <Link href="/profile/createorder/" className={styles.orders__add}>
          <div className={styles.orders__addBody}>
            <h3 className={styles.orders__addTitle}>Создать новое ТЗ</h3>
            <p className={styles.orders__addSubTitle}>профессиональное техническое <br /> задание за 15 минут </p>
            <div className={styles.orders__addStatus}>
              <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                <path d="M0 0H37C40.866 0 44 3.13401 44 7V44L0 0Z" fill="#EBEBEB"/>
                <path d="M44 44H7C3.13401 44 0 40.866 0 37V0L44 44Z" fill="#DADADA"/>
                <circle cx="21.5" cy="21.5" r="6.5" fill="white"/>
                <path d="M0 0H37C40.866 0 44 3.13401 44 7V44L0 0Z" fill="#EBEBEB"/>
                <path d="M44 44H7C3.13401 44 0 40.866 0 37V0L44 44Z" fill="#DADADA"/>
                <circle cx="21.5" cy="21.5" r="6.5" fill="white"/>
              </svg>
            </div>
          </div>
        </Link>
        <OrdersCard 
          title="Пошив платья для официантов" 
          number="№24500968" 
          href="/profile/order"
          status="В работе"
        />  
        <OrdersCard 
          title="Пошив платья для официантов" 
          number="№24500968" 
          href="/profile/order"
          status="Закончен"
        />  
        <OrdersCard 
          title="Пошив платья для официантов" 
          number="№24500968" 
          href="/profile/order"
          status="В работе"
        />  
        <OrdersCard 
          title="Пошив платья для официантов" 
          number="№24500968" 
          href="/profile/order"
          status="Закончен"
        />  
      </div> 
    </Layout>
   );
}
 
export default Orders;