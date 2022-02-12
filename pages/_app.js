import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ClikNav from "./components/ClikNav";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { SSRProvider } from "react-bootstrap";

function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <div className="bg-pink">
        <ClikNav />
      </div>
      <Component {...pageProps} />
      <Footer />
    </SSRProvider>
  );
}

export default MyApp;
