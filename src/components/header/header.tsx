import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import Mouse from "../Mouse";

export default component$(() => {
  return (
    <header class="px-3 md:px-28 mt-12 lg:p-0 lg:max-w-3xl lg:mx-auto lg:mt-24">
      <nav class="flex justify-between w-full py-3">
        <div>
          <p class="font-medium">Developer</p>
        </div>

        <button class="md:hidden px-4 py-1 border rounded">menu</button>

        <ul class="hidden md:flex">
          <li class="mr-3">
            <Link href="/about">about</Link>
          </li>
          <li class="mr-3">
            <Link href="/projects">projects</Link>
          </li>
          <li class="mr-3">
            <Link href="/blog">blog</Link>
          </li>
          <li>
            {/* <Link href="/contact">contact</Link> */}
            <Mouse hash="contact">Contact</Mouse>
          </li>
        </ul>
      </nav>
    </header>
  );
});
