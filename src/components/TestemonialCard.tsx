import { component$ } from "@builder.io/qwik"

export default component$(() => {
  return (
    <figure class="max-w-2xl mx-auto">
      <blockquote class="text-xl mb-3 text-slate-600">
        <p class="relative after:absolute after:content-[close-quote]  after:ml-2 after:text-3xl before:content-[open-quote] before:mr-2 before:text-3xl before:absolute before:-left-6 dark:text-slate-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, velit
          animi incidunt consectetur commodi culpa voluptatibus deleniti nulla.
          Quas iusto laborum, expedita commodi molestias qui? Dolorum minima
          natus alias deleniti?
        </p>
      </blockquote>
      <figcaption>
        <p class="font-medium">
          <cite>
            <span class="text-slate-800 dark:text-slate-200">
              Radoje Jezdic{" "}
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
