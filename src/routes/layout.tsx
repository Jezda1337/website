import { component$, Slot } from "@builder.io/qwik";
import Footer from "~/components/Footer";
import Header from "../components/header/header";

export default component$(() => {
  return (
    <>
      <Header />
      <main>
        <section>
          <Slot />
        </section>
      </main>
      <Footer />
    </>
  );
});
