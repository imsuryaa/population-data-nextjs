import "../styles/globals.css";
import Footer from "./layouts/Footer";
import Navbar from "./layouts/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
