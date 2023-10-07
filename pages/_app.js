import { Fragment } from "react";
import "../styles/global.css";
import Header from "@/components/header/Header";

export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <Header></Header>
      <Component {...pageProps} />;
    </Fragment>
  );
}
