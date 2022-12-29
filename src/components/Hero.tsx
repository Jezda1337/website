import { component$ } from "@builder.io/qwik";
import Mouse from "./Mouse";

export default component$(() => {
  return (
    <section class="mt-12 min-h-screen md:min-h-[calc(100vh-260px)] lg:mt-28">
      <h1 class="text-4xl md:text-5xl font-medium mb-7">
        Hello! I’m Radoje, a developer based in Serbia.
      </h1>
      <p class="mt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
        cupiditate ducimus quod saepe aperiam nemo labore provident pariatur,
        obcaecati quidem asperiores voluptatem, neque enim? Mollitia nesciunt
        optio, aspernatur rem similique labore nisi culpa ad, dolore magni
        suscipit id odio iste iure est accusantium asperiores iusto consectetur
        deleniti nostrum quibusdam! Nobis.
      </p>
      <div class="flex flex-col items-start gap-2 mt-6 md:flex-row md:gap-5 md:mt-12">
        <a
          target="_blank"
          class="text-center px-4 py-2 bg-black text-white rounded w-40 md:border md:rounded md:hover:bg-white md:hover:text-black md:transition-all
					"
          href="#"
        >
          View Linkedin
        </a>
        <a
          target="_blank"
          class="text-center px-4 py-2 text-black border rounded w-40 md:hover:bg-black md:transition-all md:hover:text-white"
          href="https://github.com/Jezda1337"
        >
          View GitHub
        </a>
      </div>
      <div class="absolute bottom-5 md:bottom-32 left-1/2 -translate-x-1/2">
        <Mouse />
      </div>
    </section>
  );
});
