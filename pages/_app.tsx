import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AuthProvider } from "../hooks/useAuth";
import { RecoilRoot } from "recoil";
import Layout from "../components/Layout";
import Header from "../components/Navbar/Header";
import Footer from "../components/Footer";

import "swiper/css";
import "swiper/css/bundle";

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
