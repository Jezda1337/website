import { component$ } from "@builder.io/qwik";
import { QwikLogo } from "./icons/qwik";

export default component$(() => {
  return (
    <footer class="px-3 mt-5 flex justify-between border-t-2 max-w-3xl mx-auto h-12 items-center md:px-28 lg:px-0 mb-56 pt-12">
      <div class="flex items-center">
        <p class="mr-3">Build with</p>
        <a target="_blank" href="https://qwik.builder.io/">
          <QwikLogo />
        </a>
      </div>
    </footer>
  );
});
