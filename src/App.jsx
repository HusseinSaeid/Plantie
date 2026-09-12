import "./App.css";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import Review from "./components/Reviews";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="min-h-screen bg-(--bg-primary)">
      <NavBar />
      <Hero />
      <Products />
      <Review />
      <Footer />
    </main>
  );
}
