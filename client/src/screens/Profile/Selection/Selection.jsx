import Layout from "@/src/layout/Layout";

import styles from './Selection.module.scss'
import TitleProfile from "@/src/components/TitleProfile/TitleProfile";
import ButtonProfile from "@/src/UI/ButtonProfile/ButtonProfile";

const Selection = () => {
  return ( 
    <Layout>
      <div className={styles.selection}>
        <TitleProfile>Подбор исполнителя</TitleProfile>
        <div className={styles.selection__header}>
          <ButtonProfile key='1' href="/" active={true}>Поставка материала</ButtonProfile>
          <ButtonProfile href="/" active={true}>Пошив изделия</ButtonProfile>
        </div>
      </div>
    </Layout>
   );
}
 
export default Selection;