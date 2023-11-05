import '@/styles/globals.scss'

import Head from 'next/head';
import {store} from "@/src/store/store";
import {Provider} from "react-redux";

export default function App({ Component, pageProps }) {
  return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
  )
}
