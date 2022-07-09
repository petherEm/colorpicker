import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";

export default function Home() {
  return (
    <div className="dark:bg-darkBlue dark:text-white font-opensans">
      <Head>
        <title>Color Picker</title>
        <meta name="description" content="Color Picker" />
      </Head>

      <Header />

      <Hero />

      <Features />

    </div>
  );
}
