import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <footer class="px-3 mt-5 lg:max-w-3xl lg:mx-auto h-12 md:px-28 lg:px-0">
      <div class="border-t-2 flex justify-between flex-col md:flex-row items-center w-full pt-6 md:pt-12">
        <div class="flex items-center flex-col md:flex-row">
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
