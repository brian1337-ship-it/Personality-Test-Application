import { Quiz, Head } from "./sections";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <main className="relative">
      <ToastContainer position="bottom-right" />
      <section className="padding">
        <Head />
      </section>
      <section className="padding-x py-0">
        <Quiz />
      </section>
    </main>
  );
};

export default App;
