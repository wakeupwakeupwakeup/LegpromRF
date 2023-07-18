import styles from './NavifationLayout.module.scss';

const NavifationLayout = ({children}) => {
  return ( 
    <>
    <nav className={styles.nav}>
      <div className="nav__profileContainer">
        {children}
      </div>
    </nav>
    </>
   );
}
 
export default NavifationLayout;