import {
  Slot,
  component$,
  useContextProvider,
  useStore,
  createContext,
  useClientEffect$,
} from "@builder.io/qwik";
import Footer from "~/components/Footer";
import MobileMenu from "~/components/MobileMenu";
import StillInWorkFlag from "~/components/StillInWorkFlag";
import Header from "../components/header/header";

export const MobileMenuContext = createContext("mobile-context");

export default component$(() => {
  const state = useStore({
    isOpen: false,
  });

  useClientEffect$(({ track }) => {
    track(() => state.isOpen);
    state.isOpen
      ? (document.documentElement.classList.add("overflow-y-hidden"),
        document.body.classList.add("overflow-y-hidden"))
      : (document.documentElement.classList.remove("overflow-y-hidden"),
        document.body.classList.remove("overflow-y-hidden"));
  });

  useContextProvider(MobileMenuContext, state);

  return (
    <>
      <div class="relative">
        <MobileMenu />
        <Header />
        <div class={`${state.isOpen ? "blur-sm" : ""} transition-all`}>
          <main>
            <section>
              <Slot />
            </section>
          </main>
          <Footer />
        </div>
        <StillInWorkFlag />
      </div>
    </>
  );
});
