import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Footer from "./static/Footer";
import Header from "./static/Header";
import Form from "./components/Form";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/membershipform" element={<Form />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
