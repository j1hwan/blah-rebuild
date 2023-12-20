/* eslint-disable react/jsx-props-no-spreading */
import { AuthUserProvider } from '@/contexts/auth_user_context';
import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps /*, AppContext */ } from 'next/app';

const MyApp = function ({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <AuthUserProvider>
        <Component {...pageProps} />
      </AuthUserProvider>
    </ChakraProvider>
  );
};

export default MyApp;
