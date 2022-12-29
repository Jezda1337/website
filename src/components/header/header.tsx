import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
// import styles from "./header.css?inline";

export default component$(() => {
  return (
    <header class="px-3 md:px-28 mt-12 lg:p-0 lg:max-w-3xl lg:mx-auto lg:mt-24">
      <nav class="flex justify-between w-full py-3">
        <div>
          <p class="font-medium">Developer</p>
        </div>

        <button class="md:hidden px-4 py-1 border rounded">menu</button>

        <ul class="hidden md:flex">
          <li>
            <Link class="px-3" href="/about">
              about
            </Link>
          </li>
          <li>
            <Link class="px-3" href="/projects">
              projects
            </Link>
          </li>
          <li>
            <Link class="px-3" href="/blog">
              blog
            </Link>
          </li>
          <li>
            <Link class="pl-3" href="/contact">
              contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
});
