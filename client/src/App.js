import { About, Footer, Header, Skills, Testimonials, Work } from "./container";
import { Navbar } from "./components";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonials />
      <Footer />
    </div>
  );
}
