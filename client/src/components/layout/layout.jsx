import Footer from "./FooterProfile/Footer";
import NavigationGuest from "./Navigation/guest/NavigationGuest";
import { useRouter } from 'next/router'


const Layout = ({children}) => {
  const router = useRouter()
  const pathname = router.pathname.split('/')

console.log(pathname)
  return ( 
    <>
        <main className="page profile" style={{backgroundColor: '#f4f4f4',}}>
          {pathname[2] == 'guest' ? <NavigationGuest /> : ''}
          
          {children}
        </main>
      <Footer />
    </>
   );
}
 
export default Layout;