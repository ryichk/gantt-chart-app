import { Amplify } from 'aws-amplify';
import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';

import awsExports from '../aws-exports';

Amplify.configure({ ...awsExports, ssr: true });

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
