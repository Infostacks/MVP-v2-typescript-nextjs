import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

import HomeComponents from "../components/HomeComponents";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home - MVP</title>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="icon"
          href="https://s3.amazonaws.com/app.candlefish.com/icons/favicon.ico"
        />
      </Head>

      <main className="m-0 w-screen h-full">
        <HomeComponents />
      </main>
    </div>
  );
};

export default Home;
