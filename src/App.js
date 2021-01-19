import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Form from "./components/Form";
function App() {
  return (
    <>
      <Navbar />
      <section className="container">
        <div className="columns">
          <Hero />
          <Form />
        </div>
      </section>
    </>
  );
}

export default App;
