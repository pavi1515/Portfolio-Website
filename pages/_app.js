import { Inter } from "next/font/google";


// pages/_app.js

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  // You can add global context providers here
  
  return <Component {...pageProps} />;
}

export default MyApp;

