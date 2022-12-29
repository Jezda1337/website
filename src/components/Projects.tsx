import { component$ } from "@builder.io/qwik";
import ProjectCard from "./ProjectCard";

export default component$(() => {
  return (
    <section id="projects">
      <div>
        <h2 class="text-2xl mb-2">Projects</h2>
        <p class="text-sm text-slate-500">
          Some of the side projects I’m currently working on.
        </p>
      </div>
      <ProjectCard />
    </section>
  );
});
