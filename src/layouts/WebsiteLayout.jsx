import Head from "next/head";
import Navbar from "@/components/Navbar/Navbar";
import SocialMedia from "@/components/SocialMedia/SocialMedia";
import styles from "@/styles/Home.module.css";
import IconMail from "@/components/IconMail/IconMail";
import Loader from "@/components/Loader/Loader";
import Footer from "@/components/Footer/Footer";
import Cursor from "@/components/Cursor/cursor";
const WebsiteLayout = ({ children }) => {
  return (
    <>
      {/* <Cursor /> */}

      <Head>
        <title>Adrien Savary Freestone</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={`${styles.main} relative`}>
        <SocialMedia />
        <IconMail />
        {children}
      </main>
      <Footer />
    </>
  );
};

export default WebsiteLayout;
