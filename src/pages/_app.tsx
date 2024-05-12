import "@/styles/globals.css";
import "../styles/main.scss";
import "../components/GameControls/GameControls.scss";
import "../components/CustomDialog/CustomDialog.scss";
import "../components/GameHistory/GameHistory.scss";
import "./game/index.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
