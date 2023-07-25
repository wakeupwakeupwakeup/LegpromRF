import styles from './Home.module.scss'
import HeaderLanding from '../../layout/HeaderLanding/HeaderLanding';

import Image from "next/image";
import Link from 'next/link';
import { useState } from 'react'

import Img1 from 'public/Landing/card_img_1.png'
import Img2 from 'public/Landing/card_img_2.png'
import Img3 from 'public/Landing/card_img_3.png'

const Home = () => {

  const cards = [
  
    {
      img: Img1,
      title: 'Пошив платья для официантов',
      number: '№24500968',
      circulation: '450',
      datePublished: '21.03.2023',
      budget: '700 000',
      dateChange: '27.06.2023',
      responses: '23',
      views: '259',
    },
    {
      img: Img2,
      title: 'Пошив платья для официантов',
      number: '№24500968',
      circulation: '350',
      datePublished: '25.03.2023',
      budget: '600 000',
      dateChange: '26.06.2023',
      responses: '54',
      views: '336',
    },
    {
      img: Img3,
      title: 'Пошив платья для официантов',
      number: '№24500968',
      circulation: '150',
      datePublished: '30.03.2023',
      budget: '200 000',
      dateChange: '25.06.2023',
      responses: '63',
      views: '129',
    }
  ]

  return ( 
    <>
      <HeaderLanding />
      <main className="page landing">
        <div className="landing__container">
          <div className={styles.landing__wrapper}>
            
            <div className={styles.landing__left}>
                  <div className={styles.landing__content}>
                    <h1 className={styles.landing__title}>Пройдите регистрацию <br /> <span className={styles.landing__three}>в три</span> простых шага</h1>
                    <h4 className={styles.landing__subTitle}>и получите список подходящих вам фабрик <span className={styles.landing__star}>*</span></h4>
                    <div className={styles.landing__auth}><Link href="/register/step1">Зарегистрироваться бесплатно</Link></div>
                    <div className={styles.landing__guest}><Link href="profile/home">Войти как гость</Link></div>
                    <div className={styles.landing__text}>
                      <span>*</span>
                      <p>
                        В нашей базе более 15 000 швейных фабрик в России и СНГ.Алгоритмы выберут и сразу покажут вам исполнителей под
                      ваше техническое задание.
                      </p>
                    </div>
                  </div>
            </div>

            <div className={styles.landing__right}>
                  <h4 className={styles.landing__orders}>260 заказов</h4>
                  <div className={styles.card}>
                    {cards.map((card, index) => {
                      return (
                      <div key={index} className={styles.card__item}>
                        <div className={styles.card__body}>
                          <Image 
                            src={card.img} 
                            alt="Фото изделия"  
                            width={228} 
                            height={228}
                          />
                          <h4 className={styles.card__title}>{card.title}</h4>
                          <p className={styles.card__number}>{card.number}</p>

                          <div className={styles.card__info}>
                              <div className={styles.card__infoItem}>
                                <div className={styles.card__label}>Тираж</div>
                                <div className={styles.card__description}>{card.circulation}</div>
                              </div>

                              <div className={styles.card__infoItem}>
                                <div className={styles.card__label}>Опубликовано</div>
                                <div className={styles.card__description}>{card.datePublished}</div>
                              </div>

                              <div className={styles.card__infoItem}>
                                <div className={styles.card__label}>Бюджет</div>
                                <div className={styles.card__description}>{card.budget} ₽</div>
                              </div>

                              <div className={styles.card__infoItem}>
                                <div className={styles.card__label}>Сдача</div>
                                <div className={styles.card__description}>{card.dateChange}</div>
                              </div>
                          </div>
                          
                          <div className={styles.card__footer}>
                            <div className={styles.card__activity}>
                              <svg width="13" height="14" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M7.08476 3.37988C7.08476 3.94023 6.86504 4.47763 6.47396 4.87386C6.08287 5.2701 5.55243 5.4927 4.99935 5.4927C4.44626 5.4927 3.91583 5.2701 3.52474 4.87386C3.13364 4.47763 2.91393 3.94023 2.91393 3.37988C2.91393 2.81952 3.13364 2.28212 3.52474 1.88589C3.91583 1.48966 4.44626 1.26706 4.99935 1.26706C5.55243 1.26706 6.08287 1.48966 6.47396 1.88589C6.86504 2.28212 7.08476 2.81952 7.08476 3.37988ZM7.13565 5.97696C7.66226 5.53211 8.0408 4.93371 8.2199 4.26316C8.39891 3.59259 8.36963 2.88244 8.13615 2.2293C7.90266 1.57617 7.47624 1.01177 6.91493 0.612878C6.35358 0.213995 5.68457 0 4.99893 0C4.31329 0 3.64429 0.213995 3.08295 0.612878C2.52162 1.01177 2.09519 1.57617 1.86171 2.2293C1.62822 2.88244 1.59899 3.59259 1.77801 4.26316C1.95703 4.93371 2.3356 5.53211 2.86221 5.97696C2.04105 6.37028 1.34092 6.98245 0.836775 7.74792C0.33263 8.51344 0.0434492 9.40336 0.000189357 10.3226C-0.00383133 10.4883 0.0563121 10.6489 0.167757 10.7701C0.279193 10.8914 0.433063 10.9636 0.596426 10.9713C0.759781 10.9791 0.919633 10.9217 1.04175 10.8115C1.16386 10.7013 1.23853 10.5471 1.24977 10.3818C1.29525 9.40522 1.71015 8.48395 2.40835 7.8092C3.10655 7.13439 4.03442 6.75791 4.99935 6.75791C5.96428 6.75791 6.89216 7.13439 7.59035 7.8092C8.28855 8.48395 8.70346 9.40522 8.74893 10.3818C8.75101 10.4662 8.76961 10.5493 8.80381 10.6263C8.83801 10.7033 8.88706 10.7726 8.94804 10.83C9.00902 10.8876 9.08076 10.9322 9.15892 10.9613C9.23716 10.9903 9.32033 11.0033 9.40358 10.9993C9.48683 10.9954 9.56841 10.9746 9.64365 10.9383C9.71881 10.9019 9.78613 10.8508 9.84152 10.7878C9.89699 10.7247 9.93937 10.6511 9.96631 10.5712C9.99334 10.4914 10.0043 10.4068 9.99851 10.3226C9.95513 9.40327 9.66584 8.51327 9.16159 7.74775C8.65725 6.98228 7.95697 6.37016 7.13565 5.97696Z" fill="#242424"/>
                              </svg>
                                <span>{card.responses} откликов</span>
                            </div>
                            <div className={styles.card__activity}>
                              <svg width="13" height="14" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M1.24724 4.94304C1.58543 4.42578 2.26508 3.4846 3.18648 2.67897C4.11352 1.86842 5.22148 1.25 6.42857 1.25C7.63565 1.25 8.74366 1.86842 9.67064 2.67897C10.592 3.4846 11.2717 4.42578 11.6099 4.94304C11.6335 4.97917 11.6335 5.02083 11.6099 5.05696C11.2717 5.57422 10.592 6.5154 9.67064 7.321C8.74366 8.13158 7.63565 8.75 6.42857 8.75C5.22148 8.75 4.11352 8.13158 3.18648 7.321C2.26508 6.5154 1.58543 5.57422 1.24724 5.05696C1.22361 5.02083 1.22361 4.97917 1.24724 4.94304ZM6.42857 0C4.80449 0 3.41967 0.826392 2.38477 1.73126C1.34424 2.64105 0.592815 3.68589 0.223288 4.25108C-0.0744298 4.70643 -0.0744286 5.29358 0.223288 5.74893C0.592816 6.31411 1.34424 7.35892 2.38477 8.26875C3.41967 9.17358 4.80449 10 6.42857 10C8.05265 10 9.43744 9.17358 10.4724 8.26875C11.5129 7.35892 12.2644 6.31411 12.6339 5.74893C12.9316 5.29358 12.9316 4.70643 12.6339 4.25108C12.2644 3.68589 11.5129 2.64105 10.4724 1.73126C9.43744 0.826392 8.05265 0 6.42857 0ZM6.42856 6.66667C7.33395 6.66667 8.06792 5.92048 8.06792 5C8.06792 4.07952 7.33395 3.33333 6.42856 3.33333C5.52317 3.33333 4.7892 4.07952 4.7892 5C4.7892 5.92048 5.52317 6.66667 6.42856 6.66667Z" fill="#242424"/>
                              </svg>
                              <span>{card.views}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )})}
                  </div>
                  <div className={styles.landing__fullOrders}><span>Показать еще</span></div>
            </div>
                
          </div>
        </div>
      </main>
    </>
 );
}
 
export default Home;
