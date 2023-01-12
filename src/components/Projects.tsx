import { component$ } from "@builder.io/qwik";
import ProjectCard from "./ProjectCard";
import { Projects } from "../../utils/projects_list";
import { Project } from "../../interfaces/Project.interface";

export default component$(() => {
  const projects = Projects.filter((project: Project) => project.id < 3);
  return (
    <section id="projects">
      <div>
        <h2 class="text-2xl mb-2">Projects</h2>
        <p class="text-sm text-slate-500 dark:text-white">
          Some of the side projects I’m currently working on.
        </p>
      </div>
      <div class="flex w-full flex-wrap gap-5 justify-between mt-12 flex-col md:flex-row items-stretch h-full">
        {projects.map((project: Project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
});
