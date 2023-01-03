import { component$ } from "@builder.io/qwik"

export default component$(() => {
  return (
    <figure class="max-w-2xl mx-auto">
      <blockquote class="text-xl mb-3 text-slate-600">
        <p class="relative after:absolute after:content-[close-quote]  after:ml-2 after:text-3xl before:content-[open-quote] before:mr-2 before:text-3xl before:absolute before:-left-6 dark:text-slate-300">
          <span class="block mb-3">
            Radoje is a radiant and wonderful professional.
          </span>{" "}
          Radoje is a great professional. His dedication and focus have been
          improving everything he has been working on. Radoje is social and
          easygoing, not just on everyday tasks but also on harder topics at
          hand. I absolutely love Radoje's can-do attitude and determination to
          finish what he has started. He would be a valuable asset to any
          company he chooses to work for.
        </p>
      </blockquote>
      <figcaption>
        <p class="font-medium">
          <cite>
            <span class="text-slate-800 dark:text-slate-200">
              <a
                class="md:hover:text-blue-500"
                target="_blank"
                href="https://www.linkedin.com/in/jaanus-lillenberg-a5957016/"
              >
                Jaanus Lillenberg
              </a>{" "}
            </span>
            <span class="text-slate-500 dark:text-slate-400">
              • Chief Of Development
            </span>
          </cite>
        </p>
      </figcaption>
    </figure>
  )
})
