import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <section id="contact" class="mt-12 md:mt-44 md:mb-40">
      <h2 class="text-2xl mb-4">Get in touch</h2>
      <p class="text-slate-500">
        Do you have a job opportunity or idea you’d like to discuse? Feel free
        to reach me at{" "}
        <a class="text-blue-400" href="">
          webdevradoje@radoje.dev
        </a>
      </p>
    </section>
  );
});
