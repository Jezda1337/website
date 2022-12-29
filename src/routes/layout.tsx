import { component$, Slot } from "@builder.io/qwik";
import Footer from "~/components/Footer";
import Header from "../components/header/header";
import "tailwindcss/tailwind.css";

export default component$(() => {
  return (
    <>
      <main>
        <Header />
        <section>
          <Slot />
        </section>
      </main>
      <Footer />
    </>
  );
});
