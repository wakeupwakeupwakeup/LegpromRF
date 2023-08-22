import Layout from '@/src/layout/Layout';
import Image from 'next/image';
import { useRouter } from 'next/router'
import ops from 'public/ooops.svg'

const NoLayout = () => {

  const router = useRouter()
  
  return ( 
   <>
     <div style={
      {textAlign: 'center', marginTop: '150px'}}>
        
      <Image 
        src={ops}
        height={80}
        width={80}
        />

      <h1 style={{textAlign: 'center', fontSize: '35px', fontWeight: '600'}}>Нет макета</h1>

      <button style={{textAlign: 'center', fontSize: '35px', marginTop: '30px', textDecoration: 'underline', color: 'blue',}} type="button" onClick={() => router.back()}>
        Назад
      </button>
    </div>
  </>
   );
}
 
export default NoLayout;