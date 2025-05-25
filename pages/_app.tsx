import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();
  const isProd = process.env.NODE_ENV === 'production';
  const basePath = isProd ? '/Client_Portfolio' : '';

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  // For static export, we don't use AnimatePresence as it requires dynamic routing
  if (isProd) {
    return (
      <>
        <Head>
          <base href={`${basePath}/`} />
        </Head>
        <Component {...pageProps} />
      </>
    );
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Component {...pageProps} key={router.asPath} />
    </AnimatePresence>
  );
}

export default MyApp;
