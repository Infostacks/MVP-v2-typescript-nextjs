import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AuthProvider } from "../hooks/useAuth";
import { RecoilRoot } from "recoil";
import Layout from "../components/Layout";

import "swiper/css";
// import 'swiper/swiper.min.css';
import "swiper/css/bundle";
// import 'swiper/swiper-bundle.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      {/* Higher Order Component */}
      <AuthProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </RecoilRoot>
  );
}

export default MyApp;
