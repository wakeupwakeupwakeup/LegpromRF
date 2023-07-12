import Header  from "./Header/Header";
import Footer from "./Footer/Footer";

const Layout = ({children}) => {
  return ( 
    <div className="wrapper">
      <Header />
      <main className="page">
        {children}
      </main>
      <Footer />
    </div>
   );
}
 
export default Layout;