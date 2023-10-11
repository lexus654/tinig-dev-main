import { Fragment } from "react";
import "../styles/global.css";
import Header from "@/components/header/Header";

export default function App({ Component, pageProps }) {
  return (
    <div className="wrapper">
      <div className="BodyWrapper">
        <Header></Header>
        <Component {...pageProps} />;
      </div>
    </div>
  );
}
