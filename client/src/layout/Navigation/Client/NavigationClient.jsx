import styles from './NavigationClient.module.scss'

import ButtonNavigation from '@/src/UI/ButtonNavigation/ButtonNavigation';
import HeaderNavigation from '@/src/UI/HeaderNavigation/HeaderNavigation';

import Link from 'next/link'
import Image from 'next/image';
import Logo from 'public/Logo/logo.png'
import { useRouter } from 'next/router'
import ButtonNavigationCollapsible from "@/src/UI/ButtonNavigationCollapsible/ButtonNavigationCollapsible";

const NavigationClient = ({active, setActive}) => {

    const tariff = 'Pro'
    const router = useRouter()
    const pathname = router.pathname.split('/')

    const createOrderIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M10.1358 1.00977H4.34032C2.54645 1.00977 1 2.46386 1 4.25861V13.7107C1 15.6065 2.44451 16.9996 4.34032 16.9996H11.2998C13.0945 16.9996 14.5495 15.5054 14.5495 13.7107V5.60641L10.1358 1.00977Z" stroke="#242424" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9.90723 1V3.53443C9.90723 4.77158 10.9083 5.77525 12.1454 5.77786C13.292 5.78048 14.4655 5.78135 14.5448 5.77612" stroke="#242424" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9.7504 9.85554H5.48047" stroke="#242424" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7.61531 11.9906V7.7207" stroke="#242424" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )

    const ordersIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <circle cx="9" cy="9" r="8" stroke="#242424" strokeWidth="1.3"/>
            <path d="M8.5 5.5V9.5L12 11.5" stroke="#242424" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )


  return ( 
    <>
      <div onClick={() => setActive(false)}  className={active ? [styles.nav__bg, styles.nav__bg_active].join(' ') : styles.nav__bg}>
        <nav onClick={(e) => e.stopPropagation()} className={active ? [styles.nav, styles.nav__active].join(' ') : styles.nav}>
          <div className={styles.nav__content}>
            <div className={styles.nav__head}>
                <div className={styles.nav__logo}>
                    <Link href='/'>
                        <Image
                            src={Logo}
                            alt="LegpromRF"
                            width={135}
                            height={35}
                        />
                    </Link>
                </div>
                <h2 className={styles.nav__title}>Кабинет</h2>
                <HeaderNavigation active={active} title="Global IT" mail="ekb-invest103@yandex.ru" tariff={tariff}/>
            </div>
            <div className={styles.nav__buttons}>
                <ButtonNavigation
                    title="Все возможности"
                    href="/profile/home"
                    activeLink={
                        pathname[2] === 'home'
                    }>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M5.2974 7.56134V13.0494" stroke="#242424" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M9.03073 4.93524V13.0494" stroke="#242424" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12.7035 10.4614V13.0494" stroke="#242424" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M12.7488 1H5.25167C2.63834 1 1.00024 2.84967 1.00024 5.46813V12.5319C1.00024 15.1503 2.63072 17 5.25167 17H12.7488C15.3698 17 17.0002 15.1503 17.0002 12.5319V5.46813C17.0002 2.84967 15.3698 1 12.7488 1Z" stroke="#242424" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {/*<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">*/}
                    {/*    <path fillRule="evenodd" clipRule="evenodd" d="M11.8906 9.17747C11.8906 9.69328 12.3097 10.1123 12.8255 10.1123C13.3413 10.1123 13.7603 9.69328 13.7603 9.17747C13.7603 8.66319 13.3413 8.24414 12.8255 8.24414C12.3097 8.24414 11.8906 8.66319 11.8906 9.17747ZM5.55693 10.1124C5.04112 10.1124 4.62207 9.69338 4.62207 9.17757C4.62207 8.66329 5.04112 8.24424 5.55693 8.24424C6.07274 8.24424 6.49178 8.66329 6.49178 9.17757C6.49178 9.69338 6.07274 10.1124 5.55693 10.1124ZM9.19072 10.1124C8.67491 10.1124 8.25586 9.69338 8.25586 9.17757C8.25586 8.66329 8.67491 8.24424 9.19072 8.24424C9.70653 8.24424 10.1256 8.66329 10.1256 9.17757C10.1256 9.69338 9.70653 10.1124 9.19072 10.1124Z" fill="#242424"/>*/}
                    {/*    <path fillRule="evenodd" clipRule="evenodd" d="M9.016 1C4.368 1 1 4.7969 1 9.01202C1 10.358 1.392 11.7433 2.08 13.0092C2.208 13.2183 2.224 13.4819 2.136 13.7311L1.6 15.5258C1.48 15.9584 1.848 16.2781 2.256 16.1499L3.872 15.67C4.312 15.5258 4.656 15.7093 5.064 15.9584C6.232 16.6467 7.688 17 9 17C12.968 17 17 13.9314 17 8.98798C17 4.72479 13.56 1 9.016 1Z" stroke="#242424" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>*/}
                    {/*</svg>*/}
                </ButtonNavigation>
                <ButtonNavigationCollapsible
                    title="Закупки"
                    href="/nolayout"
                    active={active}
                    links={
                        {
                            'Каталог поставщиков': {
                                link : '/nolayout',
                                icon : null
                            },
                            'Создать заявку': {
                                link : '/nolayout',
                                icon : null
                            },
                            'Мои заказы': {
                                link : '/nolayout',
                                icon : null
                            },
                            'Маркетплейс': {
                                link : '/nolayout',
                                icon : null
                            }
                        }
                    }
                    activeLink={
                        pathname[2] === 'nolayout'
                    }>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M10.1358 1.00977H4.34032C2.54645 1.00977 1 2.46386 1 4.25861V13.7107C1 15.6065 2.44451 16.9996 4.34032 16.9996H11.2998C13.0945 16.9996 14.5495 15.5054 14.5495 13.7107V5.60641L10.1358 1.00977Z" stroke="#242424" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M9.90723 1V3.53443C9.90723 4.77158 10.9083 5.77525 12.1454 5.77786C13.292 5.78048 14.4655 5.78135 14.5448 5.77612" stroke="#242424" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M9.7504 9.85554H5.48047" stroke="#242424" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M7.61531 11.9906V7.7207" stroke="#242424" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </ButtonNavigationCollapsible>
                <ButtonNavigationCollapsible
                    title="Продажи"
                    href="/nolayout"
                    active={active}
                    links={
                        {
                            'Входящие заказы': {
                                link : '/nolayout',
                                icon : null
                            },
                            'Реестр закупок': {
                                link : '/nolayout',
                                icon : null
                            },
                            'Добавить товар/услугу': {
                                link : '/nolayout',
                                icon : null
                            },
                            'Мой магазин': {
                                link : '/nolayout',
                                icon : null
                            }
                        }
                    }
                    activeLink={
                        pathname[2] === 'nolayout'
                    }>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <circle cx="9" cy="9" r="8" stroke="#242424" strokeWidth="1.3"/>
                        <path d="M8.5 5.5V9.5L12 11.5" stroke="#242424" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </ButtonNavigationCollapsible>
                <ButtonNavigationCollapsible
                    title="Новости"
                    href="/nolayout"
                    active={active}
                    links={
                        {
                            'Новости отрасли': {
                                link : '/nolayout',
                                icon : null
                            },
                            'Добавить новость': {
                                link : '/nolayout',
                                icon : null
                            },
                            'Все мои новости': {
                                link : '/nolayout',
                                icon : null
                            }
                        }
                    }
                    activeLink={
                        pathname[2] === 'nolayout'
                    }>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
                        <path d="M11.3991 12.7099H5.12427" stroke="#242424" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M11.3991 9.07127H5.12427" stroke="#242424" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M7.51862 5.44138H5.12427" stroke="#242424" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M11.5667 1C11.5667 1 4.89465 1.00348 4.88422 1.00348C2.48552 1.01825 1.00024 2.59652 1.00024 5.00391V12.9961C1.00024 15.4156 2.49682 17 4.91638 17C4.91638 17 11.5875 16.9974 11.5988 16.9974C13.9975 16.9826 15.4837 15.4035 15.4837 12.9961V5.00391C15.4837 2.58436 13.9862 1 11.5667 1Z" stroke="#242424" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </ButtonNavigationCollapsible>
                <ButtonNavigationCollapsible
                    title="Настройки"
                    href="/nolayout"
                    active={active}
                    hide={true}
                    links={
                        {
                            'Профиль компании': {
                                link : '/nolayout',
                                icon : null
                            },
                            'Мой кошелек': {
                                link : '/nolayout',
                                icon : null
                            },
                            'Подписки': {
                                link : '/nolayout',
                                icon : null
                            },
                            'Реферальная программа': {
                                link : '/nolayout',
                                icon : null
                            }
                        }
                    }
                    activeLink={
                        pathname[2] === 'nolayout'
                    }>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M15.5901 5.44952L15.072 4.55048C14.6336 3.78975 13.6623 3.52731 12.9005 3.96381V3.96381C12.5379 4.17742 12.1052 4.23803 11.6979 4.13226C11.2905 4.02649 10.942 3.76304 10.7291 3.4C10.5921 3.16925 10.5186 2.90642 10.5158 2.6381V2.6381C10.5281 2.20791 10.3658 1.79103 10.0658 1.48244C9.76586 1.17385 9.35375 0.999823 8.92338 1H7.87957C7.45795 0.999995 7.0537 1.16801 6.75628 1.46686C6.45886 1.76571 6.29279 2.17076 6.29481 2.59238V2.59238C6.28232 3.46289 5.57303 4.16199 4.70243 4.1619C4.43411 4.15912 4.17128 4.08553 3.94053 3.94857V3.94857C3.17876 3.51207 2.20741 3.77451 1.7691 4.53524L1.21291 5.44952C0.775129 6.2093 1.03399 7.18004 1.79196 7.62095V7.62095C2.28465 7.9054 2.58816 8.43109 2.58816 9C2.58816 9.56891 2.28465 10.0946 1.79196 10.379V10.379C1.03495 10.817 0.775809 11.7854 1.21291 12.5429V12.5429L1.73862 13.4495C1.94399 13.8201 2.28856 14.0935 2.69608 14.2094C3.10361 14.3252 3.54049 14.2738 3.91005 14.0667V14.0667C4.27335 13.8547 4.70628 13.7966 5.11261 13.9053C5.51893 14.0141 5.86499 14.2806 6.07386 14.6457C6.21082 14.8765 6.28441 15.1393 6.28719 15.4076V15.4076C6.28719 16.2871 7.00013 17 7.87957 17H8.92338C9.79987 17 10.5116 16.2917 10.5158 15.4152V15.4152C10.5137 14.9923 10.6808 14.5861 10.9799 14.287C11.279 13.9879 11.6852 13.8208 12.1081 13.8229C12.3758 13.83 12.6376 13.9033 12.8701 14.0362V14.0362C13.6298 14.474 14.6006 14.2151 15.0415 13.4571V13.4571L15.5901 12.5429C15.8024 12.1784 15.8607 11.7443 15.752 11.3368C15.6433 10.9292 15.3766 10.5818 15.011 10.3714V10.3714C14.6454 10.1611 14.3787 9.81367 14.27 9.4061C14.1613 8.99854 14.2196 8.56446 14.432 8.2C14.57 7.95892 14.7699 7.75903 15.011 7.62095V7.62095C15.7644 7.18028 16.0227 6.21521 15.5901 5.45714V5.45714V5.44952Z" stroke="#242424" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                        <circle cx="8.40522" cy="8.99995" r="2.19429" stroke="#242424" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </ButtonNavigationCollapsible>
                {/*<ButtonNavigation*/}
                {/*    title="Продажи"*/}
                {/*    href="/nolayout"*/}
                {/*    activeLink={*/}
                {/*        pathname[2] === 'nolayout'*/}
                {/*    }>*/}
                {/*    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">*/}
                {/*        <mask id="path-1-inside-1_991_51567" fill="white">*/}
                {/*            <path fillRule="evenodd" clipRule="evenodd" d="M5.42077 13.6001C6.11159 13.6001 6.67162 14.1374 6.67162 14.8001C6.67162 15.4628 6.11159 16.0001 5.42077 16.0001C4.72995 16.0001 4.16992 15.4628 4.16992 14.8001C4.16992 14.1374 4.72995 13.6001 5.42077 13.6001ZM12.9247 13.6001C13.6155 13.6001 14.1755 14.1374 14.1755 14.8001C14.1755 15.4628 13.6155 16.0001 12.9247 16.0001C12.2339 16.0001 11.6738 15.4628 11.6738 14.8001C11.6738 14.1374 12.2339 13.6001 12.9247 13.6001ZM0.833898 0H2.5017C2.88162 0 3.2091 0.245472 3.30645 0.590191L3.3259 0.678354L3.73028 3.2H15.8441C16.3442 3.2 16.7238 3.61654 16.6739 4.08028L16.6581 4.17354L15.2805 10.1206C15.0372 11.171 14.0978 11.9315 12.9904 11.9956L12.8384 12H5.60033C4.41495 12 3.39978 11.2035 3.15435 10.1039L3.12772 9.96494L1.78628 1.6H0.833898C0.373349 1.6 0 1.24183 0 0.8C0 0.389731 0.321918 0.0515943 0.736648 0.00538219L0.833898 0H2.5017H0.833898ZM14.804 4.80005H3.98633L4.77559 9.72169C4.83336 10.0819 5.13605 10.3551 5.506 10.395L5.59979 10.4H12.8379C13.1962 10.4 13.5104 10.1812 13.6256 9.86281L13.6519 9.77359L14.804 4.80005Z"/>*/}
                {/*        </mask>*/}
                {/*        <path fillRule="evenodd" clipRule="evenodd" d="M5.42077 13.6001C6.11159 13.6001 6.67162 14.1374 6.67162 14.8001C6.67162 15.4628 6.11159 16.0001 5.42077 16.0001C4.72995 16.0001 4.16992 15.4628 4.16992 14.8001C4.16992 14.1374 4.72995 13.6001 5.42077 13.6001ZM12.9247 13.6001C13.6155 13.6001 14.1755 14.1374 14.1755 14.8001C14.1755 15.4628 13.6155 16.0001 12.9247 16.0001C12.2339 16.0001 11.6738 15.4628 11.6738 14.8001C11.6738 14.1374 12.2339 13.6001 12.9247 13.6001ZM0.833898 0H2.5017C2.88162 0 3.2091 0.245472 3.30645 0.590191L3.3259 0.678354L3.73028 3.2H15.8441C16.3442 3.2 16.7238 3.61654 16.6739 4.08028L16.6581 4.17354L15.2805 10.1206C15.0372 11.171 14.0978 11.9315 12.9904 11.9956L12.8384 12H5.60033C4.41495 12 3.39978 11.2035 3.15435 10.1039L3.12772 9.96494L1.78628 1.6H0.833898C0.373349 1.6 0 1.24183 0 0.8C0 0.389731 0.321918 0.0515943 0.736648 0.00538219L0.833898 0H2.5017H0.833898ZM14.804 4.80005H3.98633L4.77559 9.72169C4.83336 10.0819 5.13605 10.3551 5.506 10.395L5.59979 10.4H12.8379C13.1962 10.4 13.5104 10.1812 13.6256 9.86281L13.6519 9.77359L14.804 4.80005Z" fill="#242424"/>*/}
                {/*        <path d="M3.30645 0.590191L3.40427 0.56862L3.40269 0.563012L3.30645 0.590191ZM3.3259 0.678354L3.4248 0.662493L3.42355 0.656819L3.3259 0.678354ZM3.73028 3.2L3.63154 3.21583L3.64504 3.3H3.73028V3.2ZM16.6739 4.08028L16.7727 4.097L16.7733 4.09097L16.6739 4.08028ZM16.6581 4.17354L16.7557 4.19615L16.7567 4.19024L16.6581 4.17354ZM15.2805 10.1206L15.378 10.1432L15.2805 10.1206ZM12.9904 11.9956L12.9933 12.0956L12.9962 12.0954L12.9904 11.9956ZM12.8384 12V12.1L12.8413 12.1L12.8384 12ZM3.15435 10.1039L3.05609 10.1228L3.05675 10.1257L3.15435 10.1039ZM3.12772 9.96494L3.02894 9.98078L3.02951 9.98375L3.12772 9.96494ZM1.78628 1.6L1.88502 1.58417L1.87152 1.5H1.78628V1.6ZM0.736648 0.00538219L0.731114 -0.09462L0.725574 -0.0940027L0.736648 0.00538219ZM0.833898 0V-0.100153L0.828372 -0.0998472L0.833898 0ZM14.804 4.80005L14.9014 4.82262L14.9298 4.70005H14.804V4.80005ZM3.98633 4.80005V4.70005H3.86901L3.88759 4.81588L3.98633 4.80005ZM4.77559 9.72169L4.67685 9.73753L4.77559 9.72169ZM5.506 10.395L5.49527 10.4946L5.50065 10.4949L5.506 10.395ZM5.59979 10.4L5.59443 10.5H5.59979V10.4ZM13.6256 9.86281L13.7198 9.89689L13.7215 9.89115L13.6256 9.86281ZM13.6519 9.77359L13.748 9.80198L13.7493 9.79616L13.6519 9.77359ZM5.42077 13.7001C6.06032 13.7001 6.57162 14.1965 6.57162 14.8001H6.77162C6.77162 14.0783 6.16287 13.5001 5.42077 13.5001V13.7001ZM6.57162 14.8001C6.57162 15.4037 6.06032 15.9001 5.42077 15.9001V16.1001C6.16287 16.1001 6.77162 15.5219 6.77162 14.8001H6.57162ZM5.42077 15.9001C4.78122 15.9001 4.26992 15.4037 4.26992 14.8001H4.06992C4.06992 15.5219 4.67867 16.1001 5.42077 16.1001V15.9001ZM4.26992 14.8001C4.26992 14.1965 4.78122 13.7001 5.42077 13.7001V13.5001C4.67867 13.5001 4.06992 14.0783 4.06992 14.8001H4.26992ZM12.9247 13.7001C13.5642 13.7001 14.0755 14.1965 14.0755 14.8001H14.2755C14.2755 14.0783 13.6668 13.5001 12.9247 13.5001V13.7001ZM14.0755 14.8001C14.0755 15.4037 13.5642 15.9001 12.9247 15.9001V16.1001C13.6668 16.1001 14.2755 15.5219 14.2755 14.8001H14.0755ZM12.9247 15.9001C12.2851 15.9001 11.7738 15.4037 11.7738 14.8001H11.5738C11.5738 15.5219 12.1826 16.1001 12.9247 16.1001V15.9001ZM11.7738 14.8001C11.7738 14.1965 12.2851 13.7001 12.9247 13.7001V13.5001C12.1826 13.5001 11.5738 14.0783 11.5738 14.8001H11.7738ZM0.833898 0.1H2.5017V-0.1H0.833898V0.1ZM2.5017 0.1C2.83888 0.1 3.12557 0.317635 3.21022 0.617371L3.40269 0.563012C3.29263 0.173309 2.92437 -0.1 2.5017 -0.1V0.1ZM3.2088 0.611727L3.22824 0.69989L3.42355 0.656819L3.40411 0.568656L3.2088 0.611727ZM3.22716 0.694188L3.63154 3.21583L3.82902 3.18417L3.42463 0.66252L3.22716 0.694188ZM3.73028 3.3H15.8441V3.1H3.73028V3.3ZM15.8441 3.3C16.2885 3.3 16.6176 3.66865 16.5745 4.06959L16.7733 4.09097C16.8299 3.56444 16.3999 3.1 15.8441 3.1V3.3ZM16.5753 4.06358L16.5595 4.15685L16.7567 4.19024L16.7725 4.09697L16.5753 4.06358ZM16.5607 4.15098L15.1831 10.0981L15.378 10.1432L16.7555 4.19611L16.5607 4.15098ZM15.1831 10.0981C14.9504 11.1026 14.0504 11.834 12.9846 11.8958L12.9962 12.0954C14.1452 12.0289 15.124 11.2394 15.378 10.1432L15.1831 10.0981ZM12.9875 11.8956L12.8355 11.9L12.8413 12.1L12.9933 12.0956L12.9875 11.8956ZM12.8384 11.9H5.60033V12.1H12.8384V11.9ZM5.60033 11.9C4.4593 11.9 3.48664 11.1336 3.25195 10.0821L3.05675 10.1257C3.31292 11.2734 4.37061 12.1 5.60033 12.1V11.9ZM3.25256 10.0851L3.22594 9.94612L3.02951 9.98375L3.05613 10.1227L3.25256 10.0851ZM3.22646 9.9491L1.88502 1.58417L1.68754 1.61583L3.02898 9.98077L3.22646 9.9491ZM1.78628 1.5H0.833898V1.7H1.78628V1.5ZM0.833898 1.5C0.424626 1.5 0.1 1.18273 0.1 0.8H-0.1C-0.1 1.30093 0.322072 1.7 0.833898 1.7V1.5ZM0.1 0.8C0.1 0.444499 0.379728 0.145772 0.747722 0.104767L0.725574 -0.0940027C0.264109 -0.0425831 -0.1 0.334963 -0.1 0.8H0.1ZM0.742174 0.105229L0.839424 0.0998472L0.828372 -0.0998472L0.731122 -0.094465L0.742174 0.105229ZM0.833898 0.1H2.5017V-0.1H0.833898V0.1ZM2.5017 -0.1H0.833898V0.1H2.5017V-0.1ZM14.804 4.70005H3.98633V4.90005H14.804V4.70005ZM3.88759 4.81588L4.67685 9.73753L4.87433 9.70586L4.08507 4.78421L3.88759 4.81588ZM4.67685 9.73753C4.74223 10.1452 5.08353 10.45 5.49528 10.4944L5.51673 10.2956C5.18858 10.2602 4.92449 10.0187 4.87433 9.70586L4.67685 9.73753ZM5.50065 10.4949L5.59443 10.4999L5.60514 10.3002L5.51136 10.2952L5.50065 10.4949ZM5.59979 10.5H12.8379V10.3H5.59979V10.5ZM12.8379 10.5C13.2365 10.5 13.5895 10.2564 13.7196 9.89683L13.5315 9.82879C13.4312 10.106 13.1558 10.3 12.8379 10.3V10.5ZM13.7215 9.89115L13.7478 9.80193L13.556 9.74525L13.5297 9.83447L13.7215 9.89115ZM13.7493 9.79616L14.9014 4.82262L14.7066 4.77748L13.5545 9.75103L13.7493 9.79616Z" fill="#F5F5F5" mask="url(#path-1-inside-1_991_51567)"/>*/}
                {/*    </svg>*/}
                {/*</ButtonNavigation>*/}
                {/*{*/}
                {/*  // tariff === 'Pro' ?*/}
                {/*  //   <ButtonNavigation*/}
                {/*  //           title="Создать заказ"*/}
                {/*  //           href="/profile/createorder/"*/}
                {/*  //           activeLink={*/}
                {/*  //               pathname[2] === 'createorder' ||*/}
                {/*  //               pathname[2] === 'selection'*/}
                {/*  //           }>*/}
                {/*  //           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18" fill="none">*/}
                {/*  //             <path fillRule="evenodd" clipRule="evenodd" d="M10.1358 1.00977H4.34032C2.54645 1.00977 1 2.46386 1 4.25861V13.7107C1 15.6065 2.44451 16.9996 4.34032 16.9996H11.2998C13.0945 16.9996 14.5495 15.5054 14.5495 13.7107V5.60641L10.1358 1.00977Z" stroke="#242424" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>*/}
                {/*  //             <path d="M9.90723 1V3.53443C9.90723 4.77158 10.9083 5.77525 12.1454 5.77786C13.292 5.78048 14.4655 5.78135 14.5448 5.77612" stroke="#242424" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>*/}
                {/*  //             <path d="M9.7504 9.85554H5.48047" stroke="#242424" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>*/}
                {/*  //             <path d="M7.61531 11.9906V7.7207" stroke="#242424" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>*/}
                {/*  //           </svg>*/}
                {/*  //   </ButtonNavigation>*/}
                {/*  // :*/}
                {/*  //   <ButtonNavigation*/}
                {/*  //           title="Заказать пошив"*/}
                {/*  //           href="/"*/}
                {/*  //           activeLink={*/}
                {/*  //               pathname[2] === 'createorder' ||*/}
                {/*  //               pathname[2] === 'selection'*/}
                {/*  //           }>*/}
                {/*  //           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18" fill="none">*/}
                {/*  //             <path fillRule="evenodd" clipRule="evenodd" d="M10.1358 1.00977H4.34032C2.54645 1.00977 1 2.46386 1 4.25861V13.7107C1 15.6065 2.44451 16.9996 4.34032 16.9996H11.2998C13.0945 16.9996 14.5495 15.5054 14.5495 13.7107V5.60641L10.1358 1.00977Z" stroke="#242424" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>*/}
                {/*  //             <path d="M9.90723 1V3.53443C9.90723 4.77158 10.9083 5.77525 12.1454 5.77786C13.292 5.78048 14.4655 5.78135 14.5448 5.77612" stroke="#242424" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>*/}
                {/*  //             <path d="M9.7504 9.85554H5.48047" stroke="#242424" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>*/}
                {/*  //             <path d="M7.61531 11.9906V7.7207" stroke="#242424" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>*/}
                {/*  //           </svg>*/}
                {/*  //   </ButtonNavigation>*/}
                {/*}*/}
                {/*/!*<ButtonNavigation *!/*/}
                {/*/!*        title="Управление заказами" *!/*/}
                {/*/!*        href="/profile/orders/" *!/*/}
                {/*/!*        activeLink={*!/*/}
                {/*/!*            pathname[2] === 'orders' ||*!/*/}
                {/*/!*            pathname[2] === 'applications' ||*!/*/}
                {/*/!*            pathname[2] === 'order' ||*!/*/}
                {/*/!*            pathname[2] === 'performers' ||*!/*/}
                {/*/!*            pathname[2] === 'archive' ||*!/*/}
                {/*/!*            pathname[2] === 'tailoring' ||*!/*/}
                {/*/!*            pathname[2] === 'change' ||*!/*/}
                {/*/!*            pathname[2] === 'offer'*!/*/}
                {/*/!*        }>*!/*/}
                {/*/!*        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">*!/*/}
                {/*/!*          <circle cx="9" cy="9" r="8" stroke="#242424" strokeWidth="1.3"/>*!/*/}
                {/*/!*          <path d="M8.5 5.5V9.5L12 11.5" stroke="#242424" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>*!/*/}
                {/*/!*        </svg>*!/*/}
                {/*/!*</ButtonNavigation>*!/*/}
                {/*<ButtonNavigation */}
                {/*        title="Новости" */}
                {/*        href="/profile/news" */}
                {/*        activeLink={*/}
                {/*          pathname[2] === 'news'*/}
                {/*        }>*/}
                {/*        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">*/}
                {/*          <path d="M11.3991 12.7099H5.12427" stroke="#242424" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>*/}
                {/*          <path d="M11.3991 9.07127H5.12427" stroke="#242424" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>*/}
                {/*          <path d="M7.51862 5.44138H5.12427" stroke="#242424" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>*/}
                {/*          <path fillRule="evenodd" clipRule="evenodd" d="M11.5667 1C11.5667 1 4.89465 1.00348 4.88422 1.00348C2.48552 1.01825 1.00024 2.59652 1.00024 5.00391V12.9961C1.00024 15.4156 2.49682 17 4.91638 17C4.91638 17 11.5875 16.9974 11.5988 16.9974C13.9975 16.9826 15.4837 15.4035 15.4837 12.9961V5.00391C15.4837 2.58436 13.9862 1 11.5667 1Z" stroke="#242424" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>*/}
                {/*        </svg>*/}
                {/*</ButtonNavigation>*/}
                {/*<ButtonNavigation*/}
                {/*    title="Настройки"*/}
                {/*    href="/nolayout"*/}
                {/*    active={active}*/}
                {/*    activeLink={*/}
                {/*        pathname[2] === 'nolayout'*/}
                {/*    }>*/}
                {/*    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">*/}
                {/*        <path fillRule="evenodd" clipRule="evenodd" d="M15.5901 5.44952L15.072 4.55048C14.6336 3.78975 13.6623 3.52731 12.9005 3.96381V3.96381C12.5379 4.17742 12.1052 4.23803 11.6979 4.13226C11.2905 4.02649 10.942 3.76304 10.7291 3.4C10.5921 3.16925 10.5186 2.90642 10.5158 2.6381V2.6381C10.5281 2.20791 10.3658 1.79103 10.0658 1.48244C9.76586 1.17385 9.35375 0.999823 8.92338 1H7.87957C7.45795 0.999995 7.0537 1.16801 6.75628 1.46686C6.45886 1.76571 6.29279 2.17076 6.29481 2.59238V2.59238C6.28232 3.46289 5.57303 4.16199 4.70243 4.1619C4.43411 4.15912 4.17128 4.08553 3.94053 3.94857V3.94857C3.17876 3.51207 2.20741 3.77451 1.7691 4.53524L1.21291 5.44952C0.775129 6.2093 1.03399 7.18004 1.79196 7.62095V7.62095C2.28465 7.9054 2.58816 8.43109 2.58816 9C2.58816 9.56891 2.28465 10.0946 1.79196 10.379V10.379C1.03495 10.817 0.775809 11.7854 1.21291 12.5429V12.5429L1.73862 13.4495C1.94399 13.8201 2.28856 14.0935 2.69608 14.2094C3.10361 14.3252 3.54049 14.2738 3.91005 14.0667V14.0667C4.27335 13.8547 4.70628 13.7966 5.11261 13.9053C5.51893 14.0141 5.86499 14.2806 6.07386 14.6457C6.21082 14.8765 6.28441 15.1393 6.28719 15.4076V15.4076C6.28719 16.2871 7.00013 17 7.87957 17H8.92338C9.79987 17 10.5116 16.2917 10.5158 15.4152V15.4152C10.5137 14.9923 10.6808 14.5861 10.9799 14.287C11.279 13.9879 11.6852 13.8208 12.1081 13.8229C12.3758 13.83 12.6376 13.9033 12.8701 14.0362V14.0362C13.6298 14.474 14.6006 14.2151 15.0415 13.4571V13.4571L15.5901 12.5429C15.8024 12.1784 15.8607 11.7443 15.752 11.3368C15.6433 10.9292 15.3766 10.5818 15.011 10.3714V10.3714C14.6454 10.1611 14.3787 9.81367 14.27 9.4061C14.1613 8.99854 14.2196 8.56446 14.432 8.2C14.57 7.95892 14.7699 7.75903 15.011 7.62095V7.62095C15.7644 7.18028 16.0227 6.21521 15.5901 5.45714V5.45714V5.44952Z" stroke="#242424" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>*/}
                {/*        <circle cx="8.40522" cy="8.99995" r="2.19429" stroke="#242424" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>*/}
                {/*    </svg>*/}
                {/*</ButtonNavigation>*/}
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