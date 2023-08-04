import styles from './NavifationLayout.module.scss';

const NavifationLayout = ({children, active, setActive}) => {
  return ( 
    <>
      <div onClick={() => setActive(false)}  className={active ? [styles.nav__bg, styles.nav__bg_active].join(' ') : styles.nav__bg}>
        <nav onClick={(e) => e.stopPropagation()} className={active ? [styles.nav, styles.nav__active].join(' ') : styles.nav}>
          <div className="nav__profileContainer">
            <div className={styles.nav__content}>
              {children}
            </div>
          </div>
        </nav>
      </div>
    </>
   );
}
 
export default NavifationLayout;