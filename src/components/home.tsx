import React, { useState } from "react";
import ProjectsGrid from "./ProjectsGrid";
import ProjectDialog from "./ProjectDialog";

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  liveUrl: string;
  techStack: string[];
  longDescription?: string;
}

const Home = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-4">
          My Project Portfolio
        </h1>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto">
          Welcome to my portfolio! Here you can explore my latest projects,
          built with modern technologies and best practices in web development.
        </p>
      </header>

      <main>
        <ProjectsGrid onProjectClick={handleProjectClick} />
      </main>

      <ProjectDialog
        open={!!selectedProject}
        onOpenChange={(open) => !open && setSelectedProject(null)}
        project={selectedProject || undefined}
      />

      <footer className="container mx-auto px-4 py-8 text-center text-muted-foreground">
        <p>© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
