import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  techStack?: string[];
  onClick?: () => void;
}

const ProjectCard = ({
  title = "Project Title",
  description = "A brief description of the project and its key features. This is a placeholder text to show how the card looks with content.",
  imageUrl = "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
  githubUrl = "https://github.com",
  liveUrl = "https://example.com",
  techStack = ["React", "TypeScript", "Tailwind"],
  onClick = () => {},
}: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="h-full"
    >
      <Card
        className="h-full flex flex-col cursor-pointer bg-white dark:bg-gray-800"
        onClick={onClick}
      >
        <div className="relative aspect-video w-full overflow-hidden rounded-t-lg">
          <img
            src={imageUrl}
            alt={title}
            className="object-cover w-full h-full"
          />
        </div>

        <CardHeader>
          <CardTitle className="text-xl">{title}</CardTitle>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <Badge key={index} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </CardHeader>

        <CardContent>
          <CardDescription className="line-clamp-3">
            {description}
          </CardDescription>
        </CardContent>

        <CardFooter className="mt-auto gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              window.open(githubUrl, "_blank");
            }}
          >
            <Github className="w-4 h-4 mr-2" />
            GitHub
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              window.open(liveUrl, "_blank");
            }}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Live Demo
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
