/* eslint-disable react/jsx-props-no-spreading */
import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps /*, AppContext */ } from 'next/app';

const MyApp = function ({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default MyApp;
