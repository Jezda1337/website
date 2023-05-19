import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <footer class="mt-5 h-12 px-3 md:px-28 lg:mx-auto lg:max-w-3xl lg:px-0">
      <div class="flex w-full flex-col items-center justify-between border-t-2 pt-6 md:flex-row md:pt-12">
        <div class="flex flex-col items-center md:flex-row">
          <p class="mr-3">Build with</p>
          <div class="flex">
            <a
              class="md:hover:text-blue-500"
              target="_blank"
              href="https://qwik.builder.io/"
              aria-label="Go to Qwik website"
            >
              qwik
            </a>
            <span class="mx-2">|</span>
            <a
              class="md:hover:text-blue-500"
              target="_blank"
              aria-label="Go to Tailwindcss website"
              href="https://tailwindcss.com/"
            >
              tailwindcss
            </a>
            <span class="mx-2">|</span>
            <a
              class="md:hover:text-blue-500"
              target="_blank"
              aria-label="Go to Tailwindcss website"
              href="https://vercel.com/"
            >
              vercel
            </a>
            <span class="ml-3">🥳</span>
          </div>
        </div>
        <div class="mt-8 md:mt-0">© 2023</div>
      </div>
    </footer>
  );
});
