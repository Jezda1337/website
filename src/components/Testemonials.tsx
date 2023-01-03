import { component$ } from "@builder.io/qwik"
import TestemonialCard from "~/components/TestemonialCard"

export default component$(() => {
  return (
    <section class="mt-16 mb-24 md:mt-16 md:mb-44">
      <h2 class="text-2xl">Testemonials</h2>
      <div class="mt-6">
        <TestemonialCard />
      </div>
    </section>
  )
})
