import Header from "./components/header";
import Footer from "./components/footer";
import Router from "./router";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Header />
      <Router />
      <Footer />
    </>
  );
}

export default App;
