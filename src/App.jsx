import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Navigation />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;
