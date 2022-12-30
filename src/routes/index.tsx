import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Hero from "~/components/Hero";
import Projects from "~/components/Projects";
import Contact from "~/components/Contact";

export default component$(() => {
  return (
    <>
      <div class="px-3 md:px-28 lg:max-w-3xl lg:mx-auto lg:p-0">
        <Hero />
        <Projects />
        <Contact />
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Developer",
  meta: [
    {
      name: "description",
      content: "Personal website for developer. Portfolio.",
    },
  ],
};
