import { Fragment } from "react";
import "../styles/global.css";
import Header from "@/components/header/Header";
import Script from "next/script";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      {" "}
      <Script src="https://cdn.roboflow.com/0.2.26/roboflow.js" />
      <div className="wrapper">
        <div className="BodyWrapper">
          <Header></Header>
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}
