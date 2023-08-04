import styles from './HeaderProfile.module.scss'

import Link from "next/link";
import Image from 'next/image';
import Logo from 'public/logo.png'

const HeaderProfile = ({active}) => {

  return ( 
    <header className={styles.header}>
      <div className="header__profileContainer">
        <div className={styles.header__content}>
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
          <div className={active ? [styles.header__burger, styles.header__menuActive].join(' ') : styles.header__burger}>
            <span></span>
          </div>
        </div>
      </div>
    </header>
   );
}
 
export default HeaderProfile;