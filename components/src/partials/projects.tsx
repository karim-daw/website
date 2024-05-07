import { getPosts } from "../utils";

import { Card } from "../card";
import GitHubRepoCard from "../githubCard";

export function ProjectsPartial() {
  let projects = getPosts("projects");

  let parsedProjects = projects.map((e) => {
    let project = { ...e.metadata.project };

    project.title = e.metadata.title;
    project.slug = e.slug;

    return project;
  });
  // .sort((a, b) => (a.start < b.start ? 1 : -1));

  const repoDetails = {
    name: "speckle-server",
    description: "The Speckle Server",
    stargazers_count: 100,
    forks_count: 50,
    language: "TypeScript",
  };

  return (
    <div>
      <div className="py-10">
        {!parsedProjects.length
          ? "No published projects"
          : parsedProjects.map((e) => (
              // <Card
              //   key={e.slug}
              //   title={e.title}
              //   slug={e.slug}
              //   color="gray-500"
              //   type="project"
              // />
              <GitHubRepoCard repoDetails={repoDetails} />
            ))}
      </div>
    </div>
  );
}
