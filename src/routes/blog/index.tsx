import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <section class="md:max-w-3xl md:mx-auto md:px-28 lg:px-0">
      <h2>blog page</h2>
    </section>
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
