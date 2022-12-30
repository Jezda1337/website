import { component$ } from "@builder.io/qwik";
import { QwikLogo } from "./icons/qwik";

export default component$(() => {
  return (
    <footer class="flex justify-between border-t-2 max-w-3xl mx-auto h-12 items-center">
      <div class="flex items-center">
        <p class="mr-3">build by</p>
        <a target="_blank" href="https://qwik.builder.io/">
          <QwikLogo />
        </a>
      </div>
    </footer>
  );
});
