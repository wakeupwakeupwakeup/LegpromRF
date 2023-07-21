import styles from './ButtonNavigation.module.scss'
import Link from 'next/link'

const ButtonNavigation = ({children, href, title, stopPropagation, active}) => {
  return ( 

    /*onClick={(e) => stopPropagation == 'true' ? e.stopPropagation() : null*/ 
    <div className={styles.button}>
        {
        stopPropagation === 'true' ?

        <div className={active ? [styles.button__link, styles.button__linkActive].join(' ') : styles.button__link}>
          <span className={styles.button__title}>{title}</span>
          {children}
        </div>
      :
        <Link className={styles.button__link} href={href} >
          <span className={styles.button__title}>{title}</span>
          {children}
        </Link>
      }
    </div>
   );
}
 
export default ButtonNavigation;