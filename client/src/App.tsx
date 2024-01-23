import { Quiz, Head } from "./sections";

const App = () => {
  return (
    <main className="relative">
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
