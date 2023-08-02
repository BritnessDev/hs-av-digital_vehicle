import '../styles/theme.scss';
import '../styles/theme/_style.scss'
import '../styles/theme/_loading.scss'

import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { NewSidenav } from '../components';
import SSRProvider from 'react-bootstrap/SSRProvider';
import { ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import { Provider } from 'react-redux'
import {store, persistor} from '../store'
import { setLanguage } from '../features/setting/settingSlice';
import { PersistGate } from 'redux-persist/integration/react'
import LoadingSpinner from '../components/Loading';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  const [language, setLanguage] = useState('du')
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  useEffect (() => {
    console.log('utra_lang', localStorage.getItem('utra_lang'));
    if (!localStorage.getItem('utra_lang')) {
      localStorage.setItem('utra_lang', 'du')
    }
  }, [])

  const authPages = [
    '/error-illustration',
    '/error',
    '/password-reset-cover',
    '/password-reset-illustration',
    '/password-reset',
    '/sign-in-cover',
    '/sign-in-illustration',
    '/sign-in',
    '/sign-up-cover',
    '/sign-up-illustration',
    '/sign-up',
  ];

  const onChangeLanguageHandler = (e) => {
    // e : 'en' or 'du'
    localStorage.setItem('utra_lang', e);
    setLanguage(e)
  }

  return (
    <>
      <Provider store={store} >
        <Head>
          <link rel="shortcut icon" href="/favicon/favicon.ico" type="image/x-icon" />
          <title>UltraConnect</title>
        </Head>
        <PersistGate loading={null} persistor={persistor}></PersistGate>
        <SSRProvider>        
          <div className='language-switcher'>
            <ToggleButtonGroup type="radio" name="toggleButton" defaultValue={`${language == 'en' ? 'en' : 'du' }`} value={language} className="btn-group-toggle" onChange={(e) => onChangeLanguageHandler(e)}>
              <ToggleButton variant="white" id="toggleButtonOne" value={'en'}>
                  <img alt="EN" src="https://unpkg.com/language-icons/icons/en.svg" style={{borderRadius: '50%'}} width={20}></img> <span>En</span> 
              </ToggleButton>
              <ToggleButton variant="white" id="toggleButtonTwo" value={'du'}>
                 <img alt="DE" src="https://unpkg.com/language-icons/icons/de.svg" style={{borderRadius: '50%'}} width={20}></img> <span>De</span>
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
          {!authPages.includes(router.pathname) && <NewSidenav />}
          <Component {...pageProps} pageLoading={loading} setPageLoading={setLoading} />
          {loading && <LoadingSpinner />}
          <ToastContainer />
        </SSRProvider>
      </Provider>
    </>
  );
}

export default MyApp;
