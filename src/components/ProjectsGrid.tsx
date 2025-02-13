import React, { useState } from "react";
import FilterBar from "./FilterBar";
import ProjectCard from "./ProjectCard";

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  liveUrl: string;
  techStack: string[];
}

interface ProjectsGridProps {
  projects?: Project[];
  onProjectClick?: (project: Project) => void;
}

const ProjectsGrid = ({
  projects = [
    {
      id: "1",
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce platform built with modern technologies",
      imageUrl: "https://images.unsplash.com/photo-1557821552-17105176677c",
      githubUrl: "https://github.com/example/e-commerce",
      liveUrl: "https://example-ecommerce.com",
      techStack: ["React", "Node.js", "MongoDB"],
    },
    {
      id: "2",
      title: "Weather Dashboard",
      description:
        "Real-time weather tracking application with interactive maps",
      imageUrl: "https://images.unsplash.com/photo-1592210454359-9043f067919b",
      githubUrl: "https://github.com/example/weather-app",
      liveUrl: "https://example-weather.com",
      techStack: ["React", "TypeScript", "OpenWeather API"],
    },
    {
      id: "3",
      title: "Task Management System",
      description: "Collaborative task management tool for teams",
      imageUrl: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91",
      githubUrl: "https://github.com/example/task-manager",
      liveUrl: "https://example-tasks.com",
      techStack: ["Python", "Django", "PostgreSQL"],
    },
  ],
  onProjectClick = () => {},
}: ProjectsGridProps) => {
  const [selectedTech, setSelectedTech] = useState<string>("");

  const allTechnologies = Array.from(
    new Set(projects.flatMap((project) => project.techStack)),
  );

  const filteredProjects =
    selectedTech && selectedTech.toLowerCase() !== "all"
      ? projects.filter((project) =>
          project.techStack.some(
            (tech) => tech.toLowerCase() === selectedTech.toLowerCase(),
          ),
        )
      : projects;

  return (
    <div className="w-full min-h-screen bg-gray-50 dark:bg-gray-900">
      <FilterBar
        selectedTech={selectedTech}
        onTechChange={setSelectedTech}
        availableTechnologies={["All", ...allTechnologies]}
      />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              {...project}
              onClick={() => onProjectClick(project)}
            />
          ))}
        </div>
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">
              No projects found with the selected technology.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsGrid;
