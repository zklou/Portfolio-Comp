import Head from 'next/head';
import { useState, useEffect } from 'react';
import '../styles/globals.css';
import { Noto_Sans } from 'next/font/google'; 
import { motion } from 'framer-motion';
import Layout from './components/layout/Layout';
import Loader from './components/layout/Loader';

const notoSans = Noto_Sans({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin-ext'],
});

const MyApp = ({ Component, pageProps }) => {
  const [loading, setLoading] = useState(true);

  // 模拟加载效果
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 8000);
    return () => clearTimeout(timer); // 清除定时器
  }, []);

  // 如果组件自带布局逻辑，直接使用组件的布局
  if (Component.getLayout) {
    return (
      <>
        <Head>
          <title>Zhengkun Lou | Portfolio</title>
          <meta name="description" content="Welcome to Zhengkun Lou's portfolio. A showcase of skills, projects, and professional experiences." />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} className="overflow-hidden" />
      </>
    );
  }

  // 加载逻辑：显示Loader或加载后的内容
  return (
    <>
      <Head>
        <title>Zhengkun Lou | Portfolio</title>
        <meta name="description" content="Welcome to Zhengkun Lou's portfolio. A showcase of skills, projects, and professional experiences." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {loading ? (
        <Loader />
      ) : (
        <Layout>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { type: 'spring', duration: 1 } }}
            className={`${notoSans.className} overflow-hidden bg-[#000] relative`}
          >
            <Component {...pageProps} />
          </motion.div>
        </Layout>
      )}
    </>
  );
};

export default MyApp;
