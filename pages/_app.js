import "../styles/globals.css";
import HeaderNav from "../components/HeaderNav";

export default function App({ Component, pageProps }) {
  return (
    <>
      <HeaderNav />
      <Component {...pageProps} />
    </>
  );
}
