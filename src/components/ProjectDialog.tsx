import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Github, ExternalLink } from "lucide-react";

interface ProjectDialogProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  project?: {
    title: string;
    description: string;
    imageUrl: string;
    githubUrl: string;
    liveUrl: string;
    techStack: string[];
    longDescription?: string;
  };
}

const ProjectDialog = ({
  open = true,
  onOpenChange = () => {},
  project = {
    title: "Sample Project",
    description: "A brief description of the project",
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    techStack: ["React", "TypeScript", "Tailwind"],
    longDescription:
      "This is a more detailed description of the project that explains its features, technologies used, and the problems it solves. It provides more context about the development process and the decisions made during implementation.",
  },
}: ProjectDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-800">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            {project.title}
          </DialogTitle>
          <div className="flex flex-wrap gap-2 mt-2">
            {project.techStack.map((tech, index) => (
              <Badge key={index} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </DialogHeader>

        <div className="relative aspect-video w-full overflow-hidden rounded-lg mt-4">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="object-cover w-full h-full"
          />
        </div>

        <DialogDescription className="mt-4 text-base">
          {project.longDescription || project.description}
        </DialogDescription>

        <div className="flex gap-4 mt-6">
          <Button
            onClick={() => window.open(project.githubUrl, "_blank")}
            className="flex-1"
          >
            <Github className="w-4 h-4 mr-2" />
            View on GitHub
          </Button>
          <Button
            onClick={() => window.open(project.liveUrl, "_blank")}
            variant="secondary"
            className="flex-1"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Live Demo
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDialog;
