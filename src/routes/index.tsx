import { component$ } from "@builder.io/qwik"
import type { DocumentHead } from "@builder.io/qwik-city"
import Contact from "~/components/Contact"
import Hero from "~/components/Hero"
import Projects from "~/components/Projects"
import Testemonials from "~/components/Testemonials"

export default component$(() => {
  return (
    <>
      <div class="px-3 md:px-28 lg:max-w-3xl lg:mx-auto lg:p-0">
        <Hero />
        <Testemonials />
        <Projects />
        <Contact />
      </div>
    </>
  )
})

export const head: DocumentHead = {
  title: "Developer",
  meta: [
    {
      name: "description",
      content: "Personal website for developer. Portfolio.",
    },
  ],
}
