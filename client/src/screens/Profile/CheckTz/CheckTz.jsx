import Layout from "@/src/layout/Layout";

import styles from './CheckTz.module.scss'
import icon from 'public/icon/iconTz.png'

import Link from "next/link";
import Image from "next/image";

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Images from "./dataImgSlider";

import { useState, useEffect } from "react";


const CheckTz = () => {

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);
  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  });

  const settings = {
    infinite: true,

    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    focusOnSelect: true,
    adaptiveHeight: true

  };
  const thumbnailSettings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    swipeToSlide: true,
    focusOnSelect: true,
  };

  return ( 
    <Layout>
      <div className={styles.checktz}>
        <div className={styles.checktz__title}>Просмотр технического задания</div>
        <div className={styles.checktz__head}>
          <div className={styles.checktz__ico}>
              <Image 
                src={icon}
                alt="Иконка"  
                width={60} 
                height={60}
              />
            </div>
          <div className={styles.checktz__content}>
            <div className={styles.checktz__info}>
              <div className={styles.checktz__name}>Пошив платья для официантов</div>
              <div className={styles.checktz__number}>№24500968</div>
            </div>
            <div className={styles.checktz__control}>
              <div className={styles.checktz__items}>
                <div className={styles.checktz__controlItem}>
                  <div className={styles.checktz__controlTitle}>Распечатать</div>
                  <div className={styles.checktz__controlIcon}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 14" fill="none">
                      <path d="M3.46528 12.9999H8.60224C9.92683 12.9999 11 11.7911 11 10.4444V4.45527L7.74318 1.00787H3.46528C2.14133 1.00787 1 2.09842 1 3.44444V6" stroke="#242424" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 10.9146C1.5 9.6671 2.51488 8.65794 3.76245 8.66485L4 8.66616V10.6039C4 10.8222 4.26015 10.9356 4.42012 10.7871L7.30271 8.11037C7.40923 8.01146 7.40923 7.84288 7.30271 7.74397L4.42011 5.0673C4.26015 4.91876 4 5.03221 4 5.2505V7.16614L3.77075 7.16487C1.69169 7.15336 0 8.8353 0 10.9146V11.9272C0 12.3414 0.335786 12.6772 0.75 12.6772C1.16421 12.6772 1.5 12.3414 1.5 11.9272V10.9146Z" fill="#242424"/>
                      <path d="M7.57495 1V2.90077C7.57495 3.82861 8.31376 4.58134 9.22619 4.5833C10.073 4.58526 10.9391 4.58591 10.9977 4.58199" stroke="#242424" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div className={styles.checktz__controlItem}>
                  <div className={styles.checktz__controlTitle}>Поделится</div>
                  <div className={styles.checktz__controlIcon}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="13" viewBox="0 0 10 13" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M4.85267 0.0614441L2.43896 2.49193C2.30772 2.62409 2.40068 2.85005 2.58628 2.85005H4.375C4.375 2.85006 4.375 2.85006 4.375 2.85006V7.67502C4.375 8.0226 4.65482 8.30437 5 8.30437C5.34518 8.30437 5.625 8.0226 5.625 7.67502V2.85006C5.625 2.85006 5.625 2.85006 5.625 2.85005H7.41366C7.59933 2.85005 7.69225 2.62409 7.561 2.49193L5.1473 0.0614433C5.06594 -0.0204814 4.93403 -0.0204811 4.85267 0.0614441ZM1.45834 5.36748C1.34328 5.36748 1.25 5.4614 1.25 5.57726V11.0315C1.25 11.1474 1.34328 11.2413 1.45834 11.2413H8.54166C8.65675 11.2413 8.75 11.1474 8.75 11.0315V5.57726C8.75 5.4614 8.65675 5.36748 8.54166 5.36748H7.70833C7.36316 5.36748 7.08333 5.08571 7.08333 4.73814C7.08333 4.39055 7.36316 4.10879 7.70833 4.10879H8.54166C9.34708 4.10879 10 4.76625 10 5.57726V11.0315C10 11.8426 9.34708 12.5 8.54166 12.5H1.45834C0.652918 12.5 0 11.8426 0 11.0315V5.57726C0 4.76625 0.652918 4.10879 1.45834 4.10879H2.29167C2.63685 4.10879 2.91667 4.39055 2.91667 4.73814C2.91667 5.08571 2.63685 5.36748 2.29167 5.36748H1.45834Z" fill="#242424"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className={styles.checktz__respond}><Link href="/">Откликнуться</Link></div>
            </div>
          </div>
        </div>
        <div className={styles.checktz__date}>
          <div className={styles.checktz__dateInfo}>Опубликовано: 29 июня 2022 г. </div>
          <div className={styles.checktz__dateEdit}>(изменено 30 июня 2022 г.)</div>
        </div>

        <div className={styles.card}>
          <div className={styles.card__body}>
            <div className={styles.card__head}>
              <div className={[styles.card__headItem, styles.card__headItem_active].join(' ')}>Основная информация</div>
              <div className={styles.card__headItem}>Изделие</div>
              <div className={styles.card__headItem}>Документация</div>
              <div className={styles.card__headItem}>Размеры изделия</div>
              <div className={styles.card__headItem}>Условия закупки</div>
            </div>
            <div className={styles.card__content}>
              <div className={styles.card__slider}>
              <Slider
            {...settings}
            asNavFor={nav2}
            ref={(slider) => setSlider1(slider)}
          >
            {Images.map((item) => (
              <div key={item.id}>
                <img src={item.src} alt={item.alt} />
              </div>
            ))}
          </Slider>
      

       <div className="asddf">
       <Slider
          {...thumbnailSettings}
          asNavFor={nav1}
          ref={(slider) => setSlider2(slider)}
          >
          {Images.map((item) => (
            <div key={item.id}>
              <img src={item.src} alt={item.alt}  />
            </div>
          ))}
        </Slider>
       </div>
        </div>
              <div className={styles.card__info}>
                <div className={styles.card__infoHead}>
                  <div className={styles.card__infoItem}>
                    <div className={styles.card__infoLabel}>Плановый бюджет</div>
                    <div className={styles.card__infoBlock}>до 960 000 ₽</div>
                  </div>
                  <div className={styles.card__infoItem}>
                    <div className={styles.card__infoLabel}>Срок сдачи</div>
                    <div className={styles.card__infoBlock}>до 25.07.2023</div>
                  </div>
                  <div className={styles.card__infoItem}>
                    <div className={styles.card__infoLabel}>Количество</div>
                    <div className={styles.card__infoBlock}>260 шт.</div>
                  </div>
                  <div className={styles.card__infoItem}>
                    <div className={styles.card__infoLabel}>Регион доставки</div>
                    <div className={styles.card__infoBlock}>Ярославская область</div>
                  </div>
                </div>
                <div className={styles.card__infoFull}>
                  <div className={styles.card__row}>
                    <div className={styles.card__column}>
                      <div className={styles.card__title}>Вид изделия</div>
                      <div className={styles.card__subTitle}>Пошив одежды</div>
                    </div>
                    <div className={styles.card__column}>
                      <div className={styles.card__title}>Дополнительное нанисение</div>
                      <div className={styles.card__subTitle}>Нанесение принта на изделие</div>
                    </div>
                    <div className={styles.card__column}>
                      <div className={styles.card__title}>Требуемая документация</div>
                      <div className={styles.card__subTitle}>Разработка/доработка модели. Разработка лекал. Разработка технологической документации.</div>
                    </div>
                  </div>
                  <div className={styles.card__row}>
                    <div className={styles.card__column}>
                      <div className={styles.card__title}>Тип одежды</div>
                      <div className={styles.card__subTitle}>Трикотажная одежда</div>
                    </div>
                    <div className={styles.card__column}>
                      <div className={styles.card__title}>Поставка сырья</div>
                      <div className={styles.card__subTitle}>Требуется подбор и закупка тканей и фурнитуры</div>
                    </div>
                  </div>
                  <div className={styles.card__row}>
                    <div className={styles.card__column}>
                      <div className={styles.card__title}>Сфера применения</div>
                      <div className={styles.card__subTitle}>Форменная одежда, обмундирование</div>
                    </div>
                  </div>
                </div>
                <div className={styles.card__footer}>
                  <div className={styles.card__contact}>
                    <div className={styles.card__contactTitle}>Контактное лицо</div>
                    <div className={styles.card__contactSubTitle}>Владислава Ю.Р.</div>
                  </div>
                  <div className={styles.card__contact}>
                    <div className={styles.card__contactTitle}>Электронная почта</div>
                    <div className={styles.card__contactSubTitle}>pavel.balk@mail.ru</div>
                  </div>
                  <div className={styles.card__contact}>
                    <div className={styles.card__contactTitle}>Контактный телефон</div>
                    <div className={styles.card__contactSubTitle}>+7 967 313 33 53</div>
                  </div>
                </div>
              </div>
            
         
        </div>
      </div>
      </div>
      </div>
    </Layout>
   );
}
 
export default CheckTz;