import "bootstrap/dist/css/bootstrap.css";
import type { AppProps /* , AppContext */ } from "next/app";
import styles from "../styles/App.module.css";
import "../styles/globals.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <div className={styles.wrapper}>
      <Component {...pageProps} />
    </div>
  );
}

export default App;
