import styles from './ButtonProfile.module.scss'
import Link from 'next/link';

const ButtonProfile = ({children, href, active, key}) => {

  console.log(key)
  return ( 
    <div className={active ? [styles.button, styles.button_active].join(' ') : styles.button}>
      <Link href={href}>
        <span>{children}</span>
        <div className={[styles.button__key, styles.button__key_active].join(' ')}>{key}</div>
      </Link>
    </div>
   );
}
 
export default ButtonProfile;
