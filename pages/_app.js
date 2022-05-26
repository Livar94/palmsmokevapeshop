import '../styles/globals.css'
import '../styles/uploadimage.css'
import Layout from '../components/Layout';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { ProvideOverTwentyOne } from '../context/useOverTwentyOne';
import { ProvideUser } from '../context/useUser';
import { ProvideCategories } from './../context/useCategories';
import { 
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import Script from 'next/script';

const queryClient = new QueryClient()
function MyApp({ Component, pageProps }) {

  useEffect(() => {
    const unsub = AOS.init({
      duration : 1000,
      once: true
    });
    return unsub;
  }, [])

  return <QueryClientProvider client={queryClient}> 
  <ProvideCategories>
    <ProvideUser>
      <ProvideOverTwentyOne>
          <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS}`} />

          <Script strategy="lazyOnload" id="">
              {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.GOOGLE_ANALYTICS}', {
                  page_path: window.location.pathname,
                  });
              `}
          </Script>
        <Layout><Component {...pageProps} /></Layout>
      </ProvideOverTwentyOne>
    </ProvideUser>
  </ProvideCategories>
  </QueryClientProvider>
  
}

export default MyApp
