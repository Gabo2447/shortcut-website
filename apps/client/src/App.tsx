import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import Hero from "@/components/sections/hero";
import Shortcut from "@/components/shortcut";

function App() {
  return (
    <section className="size-full flex flex-col">
      <Header />
      <main className="flex-1 my-12">
        <Hero />
        <Shortcut />
      </main>
      <Footer />
    </section>
  );
}

export default App;
