import Head from 'next/head';
import Layout from '../components/layout/layout'
import '../styles/globals.css';
import { useTheme } from 'next-themes';
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  

  return (
    <Layout>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <ThemeProvider enableSystem={true} attribute="class"><Component {...pageProps} /></ThemeProvider>
    </Layout>
  );
}

export default MyApp;
