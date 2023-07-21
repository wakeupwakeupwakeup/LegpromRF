import styles from './NavifationLayout.module.scss';

const NavifationLayout = ({children, active}) => {
  return ( 
    <>
    <nav onClick={(e) => e.stopPropagation()} className={active ? [styles.nav, styles.nav__active].join(' ') : styles.nav}>
      <div className="nav__profileContainer">
        <div className={styles.nav__content}>
          {children}
        </div>
      </div>
    </nav>
    </>
   );
}
 
export default NavifationLayout;