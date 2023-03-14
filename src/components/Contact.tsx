import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <section id="contact" class="my-24 md:mt-44 md:mb-40">
      <h2 class="text-2xl mb-4 animate-fade-in-left">Get in touch</h2>
      <p class="text-slate-500 dark:text-white animate-fade-in-down">
        Do you have a job opportunity or idea you’d like to discuse? Feel free
        to reach me at{" "}
        <a
          class="text-blue-600 dark:text-blue-500"
          href="mailto:hello@radoje.dev"
          aria-label="Contact radoje via email"
        >
          hello@radoje.dev
        </a>
        . You can also find me on{" "}
        <a
          class="text-blue-600 dark:text-blue-500"
          href="https://www.linkedin.com/in/radoje-jezdic/"
          target="_blank"
          aria-label="Go to radoje's linkedin"
        >
          LinkedIn
        </a>{" "}
        and{" "}
        <a
          class="text-blue-600 dark:text-blue-500"
          href="https://github.com/Jezda1337"
          target="_blank"
          aria-label="Go to radoje's github profile"
        >
          GitHub
        </a>
        .
      </p>
    </section>
  );
});
