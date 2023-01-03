import { component$ } from "@builder.io/qwik"
import ProjectCard from "./ProjectCard"

export default component$(() => {
  const projects = [
    {
      id: 1,
      name: "project 1",
      description: "lorem ipsum bla-bla",
      url: "project-1",
      picture:
        "https://images.unsplash.com/photo-1503252947848-7338d3f92f31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2662&q=80",
    },
    {
      id: 2,
      name: "project 2",
      description: "lorem ipsum bla-bla",
      url: "project-2",
      picture:
        "https://images.unsplash.com/photo-1503252947848-7338d3f92f31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2662&q=80",
    },
  ]

  return (
    <section id="projects">
      <div>
        <h2 class="text-2xl mb-2">Projects</h2>
        <p class="text-sm text-slate-500 dark:text-white">
          Some of the side projects I’m currently working on.
        </p>
      </div>
      <div class="flex w-full flex-wrap gap-5 justify-between mt-12 flex-col md:flex-row items-center">
        {projects.map((project: any) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
})
