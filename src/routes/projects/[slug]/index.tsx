import { component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { Projects } from "../../../../utils/projects_list";
import { Project } from "../../../../interfaces/Project.interface";

export default component$(() => {
  const loc = useLocation();
  function selectedProject(): Project {
    return Projects.find(({ slug }) => slug === loc.params.slug);
  }

  const { title, type, techList, live, description, projectHeroImage } =
    selectedProject();

  return (
    <section class="px-3 md:mt-28 md:px-28 lg:p-0 lg:max-w-3xl lg:mx-auto">
      <h1 class="text-4xl font-bold">{title}</h1>
      <p class="my-6">{description}</p>

      <table class="w-full mt-24 md:mt-28">
        <thead class="md:h-14">
          <tr class="text-left">
            <th class="align-top">Type</th>
            <th class="align-top">Stack</th>
            <th class="align-top">Live</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="align-top">{type}</td>
            <td class="align-top">
              {techList.map((tech: string) => (
                <p class="align-top">{tech}</p>
              ))}
            </td>
            <td class="align-top">
              <a href={live} class="text-blue-500 md:hover:text-orange-500">
                View Site
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="my-24">
        <div>
          <img src={projectHeroImage} alt="" />
        </div>
      </div>
    </section>
  );
});
