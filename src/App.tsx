import { BrowserRouter } from "react-router-dom";
import { Footer } from "./common/Footer";
import { Navbar } from "./common/Navbar";
import { AppRoutes } from "./routes";

export default function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
      <Footer />
    </div>
  );
}
