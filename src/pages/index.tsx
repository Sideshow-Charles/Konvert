import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import Header from "@/components/header"


export default function Home() {
  return (
    <div id="app">
      <Header></Header>
    </div>
  );
}


