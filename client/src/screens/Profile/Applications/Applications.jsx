import Layout from "@/src/layout/Layout";

import styles from './Applications.module.scss'
import TitleProfile from "@/src/components/TitleProfile/TitleProfile";
import Link from "next/link";

const AboutOrder = () => {
  return ( 
    <Layout>
      <div className={styles.aboutOrder}>
        <div className={styles.aboutOrder__title}>
          <h2>Пошив платья для официантов</h2>
          <div className={styles.aboutOrder__number}>№24500968</div>
        </div>
        <div className={styles.aboutOrder__header}>
          <div className={[styles.aboutOrder__item, styles.aboutOrder__item_active].join(' ')}>
            <Link href="/">
              <span>Поставка материала</span>
              <div className={[styles.aboutOrder__itemNumber, styles.aboutOrder__itemNumber_active].join(' ')}>1</div>
            </Link>
          </div>
          <div className={styles.aboutOrder__item}>
            <Link href="/">
              <span>Пошив изделия</span>
              <div className={styles.aboutOrder__itemNumber}>2</div>
            </Link>
          </div>
          <div className={styles.aboutOrder__item}>
            <Link href="/">
              <span>Сдача заказа</span>
              <div className={styles.aboutOrder__itemNumber}>3</div>
            </Link>
          </div>
        </div>
        <div className={styles.aboutOrder__contol}>
        <div className={styles.aboutOrder__applications}>
          <span>Отправлено заявок 54:</span>
          <Link href="/profile/selection/" className={styles.aboutOrder__applications_button}>Подобрать еще</Link>
        </div>
        
        </div>
        <table className={styles.aboutOrder__table}>
        <thead>
          <tr>
            <th>Название компании</th>
            <th>Смета от компании</th>
            <th>Сроки на выполнение</th>
            <th>Контактные данные</th>
            <th>Статус заявки</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>СИЗив</td>
            <td>Не предоставлено</td>
            <td>Не предоставлено</td>
            <td className={styles.aboutOrder__checkDada}><Link href="/">Просмотреть данные</Link></td>
            <td className={styles.aboutOrder__evaluation}>На оценке</td>
            <td className={styles.aboutOrder__moove}> 
              <Link href='/' className={styles.aboutOrder__offer}>Предложить другое ТЗ</Link>
            </td>
          </tr>
          <tr>
            <td>Домовенок</td>
            <td>Не предоставлено</td>
            <td>2 месяца</td>
            <td className={styles.aboutOrder__checkDada}><Link href="/">Просмотреть данные</Link></td>
            <td className={styles.aboutOrder__denial}>Отказ (2 причины)</td>
            <td className={styles.aboutOrder__moove}>
              <Link href='/' className={styles.aboutOrder__discuss}>Обсудить</Link>
              <p className={styles.aboutOrder__message}>3 не прочитанных сообщения</p>
            </td>
          </tr>
          <tr>
            <td>Мягкий инвентарь</td>
            <td>Не предоставлено</td>
            <td>1 месяца</td>
            <td className={styles.aboutOrder__checkDada}><Link href="/">Просмотреть данные</Link></td>
            <td className={styles.aboutOrder__agreement}>Согласен (3 вопроса)</td>
            <td className={styles.aboutOrder__moove}> 
              <Link href='/' className={styles.aboutOrder__offer}>Предложить другое ТЗ</Link>
            </td>
          </tr>
          <tr>
            <td>СаНата-Текстиль</td>
            <td>Не предоставлено</td>
            <td>2 недели</td>
            <td className={styles.aboutOrder__checkDada}><Link href="/">Просмотреть данные</Link></td>
            <td className={styles.aboutOrder__evaluation}>На оценке</td>
            <td className={styles.aboutOrder__moove}>
              <Link href='/' className={styles.aboutOrder__discuss}>Обсудить</Link>
              <p className={styles.aboutOrder__message}>3 не прочитанных сообщения</p>
            </td>
          </tr>
          <tr>
            <td>Орион-Текс</td>
            <td>Не предоставлено</td>
            <td>Не предоставлено</td>
            <td className={styles.aboutOrder__checkDada}><Link href="/">Просмотреть данные</Link></td>
            <td className={styles.aboutOrder__evaluation}>На оценке</td>
            <td className={styles.aboutOrder__moove}> 
              <Link href='/' className={styles.aboutOrder__offer}>Предложить другое ТЗ</Link>
            </td>
          </tr>
          <tr>
            <td>Перчатка-37</td>
            <td>50 000 ₽</td>
            <td>Не предоставлено</td>
            <td className={styles.aboutOrder__checkDada}><Link href="/">Просмотреть данные</Link></td>
            <td className={styles.aboutOrder__agreement}>Согласен (1 вопрос)</td>
            <td className={styles.aboutOrder__moove}> 
              <Link href='/' className={styles.aboutOrder__offer}>Предложить другое ТЗ</Link>
            </td>
          </tr>
          <tr>
            <td>СпецПошив-Иванов</td>
            <td>Не предоставлено</td>
            <td>Не предоставлено</td>
            <td className={styles.aboutOrder__checkDada}><Link href="/">Просмотреть данные</Link></td>
            <td className={styles.aboutOrder__denial}>Отказ (1 причина)</td>
            <td className={styles.aboutOrder__moove}>
              <Link href='/' className={styles.aboutOrder__write}>Написать</Link>
            </td>
          </tr>
          <tr>
            <td>RukTex</td>
            <td>10 000 ₽</td>
            <td>Не предоставлено</td>
            <td className={styles.aboutOrder__checkDada}><Link href="/">Просмотреть данные</Link></td>
            <td className={styles.aboutOrder__denial}>Отказ (2 причины)</td>
            <td className={styles.aboutOrder__moove}>
              <Link href='/' className={styles.aboutOrder__write}>Написать</Link>
            </td>
          </tr>
          <tr>
            <td>СПЕЦНИТЬ</td>
            <td>Не предоставлено</td>
            <td>3 месяца</td>
            <td className={styles.aboutOrder__checkDada}><Link href="/">Просмотреть данные</Link></td>
            <td className={styles.aboutOrder__agreement}>Согласен (2 вопроса)</td>
            <td className={styles.aboutOrder__moove}>
              <Link href='/' className={styles.aboutOrder__write}>Написать</Link>
            </td>
          </tr>
          <tr>
            <td>ПТК МИР</td>
            <td>Не предоставлено</td>
            <td>Не предоставлено</td>
            <td className={styles.aboutOrder__checkDada}><Link href="/">Просмотреть данные</Link></td>
            <td className={styles.aboutOrder__denial}>Отказ (4 причины)</td>
            <td className={styles.aboutOrder__moove}>
              <Link href='/' className={styles.aboutOrder__write}>Написать</Link>
            </td>
          </tr>
          <tr>
            <td>Политекс</td>
            <td>Не предоставлено</td>
            <td>4 месяца</td>
            <td className={styles.aboutOrder__checkDada}><Link href="/">Просмотреть данные</Link></td>
            <td className={styles.aboutOrder__evaluation}>На оценке</td>
            <td className={styles.aboutOrder__moove}>
              <Link href='/' className={styles.aboutOrder__discuss}>Обсудить</Link>
              <p className={styles.aboutOrder__message}>3 не прочитанных сообщения</p>
            </td>
          </tr>
          <tr>
            <td>ОДЕСнаб</td>
            <td>Не предоставлено</td>
            <td>1 неделя</td>
            <td className={styles.aboutOrder__checkDada}><Link href="/">Просмотреть данные</Link></td>
            <td className={styles.aboutOrder__denial}>Отказ (4 причины)</td>
            <td className={styles.aboutOrder__moove}>
              <Link href='/' className={styles.aboutOrder__discuss}>Обсудить</Link>
              <p className={styles.aboutOrder__message}>3 не прочитанных сообщения</p>
            </td>
          </tr>
          <tr>
            <td>Петростиль</td>
            <td>17 000 ₽</td>
            <td>Не предоставлено</td>
            <td className={styles.aboutOrder__checkDada}><Link href="/">Просмотреть данные</Link></td>
            <td className={styles.aboutOrder__evaluation}>На оценке</td>
            <td className={styles.aboutOrder__moove}>
              <Link href='/' className={styles.aboutOrder__write}>Написать</Link>
            </td>
          </tr>
          <tr>
            <td>Спецкомплекс-Черноземье</td>
            <td>190 000 ₽</td>
            <td>Не предоставлено</td>
            <td className={styles.aboutOrder__checkDada}><Link href="/">Просмотреть данные</Link></td>
            <td className={styles.aboutOrder__evaluation}>На оценке</td>
            <td className={styles.aboutOrder__moove}>
              <Link href='/' className={styles.aboutOrder__write}>Написать</Link>
            </td>
          </tr>
          <tr>
            <td>ИП Герзон О.А.</td>
            <td>170 000 ₽</td>
            <td>Не предоставлено</td>
            <td className={styles.aboutOrder__checkDada}><Link href="/">Просмотреть данные</Link></td>
            <td className={styles.aboutOrder__evaluation}>На оценке</td>
            <td className={styles.aboutOrder__moove}>
              <Link href='/' className={styles.aboutOrder__discuss}>Обсудить</Link>
              <p className={styles.aboutOrder__message}>3 не прочитанных сообщения</p>
            </td>
          </tr>
          <tr>
            <td>Орион-РТИ</td>
            <td>Не предоставлено</td>
            <td>Не предоставлено</td>
            <td className={styles.aboutOrder__checkDada}><Link href="/">Просмотреть данные</Link></td>
            <td className={styles.aboutOrder__agreement}>Согласен (4 вопроса)</td>
            <td className={styles.aboutOrder__moove}>
              <Link href='/' className={styles.aboutOrder__discuss}>Обсудить</Link>
              <p className={styles.aboutOrder__message}>3 не прочитанных сообщения</p>
            </td>
          </tr>
        </tbody>
      </table>
      </div>

    </Layout>
   );
}
 
export default AboutOrder;