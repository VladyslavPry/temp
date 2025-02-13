import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Badge } from "./ui/badge";

interface FilterBarProps {
  selectedTech?: string;
  onTechChange?: (value: string) => void;
  availableTechnologies?: string[];
}

const FilterBar = ({
  selectedTech = "",
  onTechChange = () => {},
  availableTechnologies = [
    "React",
    "TypeScript",
    "Node.js",
    "Python",
    "Django",
    "All",
  ],
}: FilterBarProps) => {
  return (
    <div className="w-full bg-background border-b p-4 flex items-center justify-between sticky top-0 z-10">
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium">Filter by technology:</span>
        <Select value={selectedTech} onValueChange={onTechChange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select technology" />
          </SelectTrigger>
          <SelectContent>
            {availableTechnologies.map((tech) => (
              <SelectItem key={tech} value={tech.toLowerCase()}>
                {tech}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex gap-2">
        {selectedTech && selectedTech.toLowerCase() !== "all" && (
          <Badge variant="secondary">{selectedTech}</Badge>
        )}
      </div>
    </div>
  );
};

export default FilterBar;
