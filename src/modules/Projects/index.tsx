import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import content from "./content";

interface Props {
  children?: JSX.Element;
}

const Projects = (props: Props) => {
  const { header, jobs } = content;
  return (
    <div>
      <div>
        <h4 id="projects" className="mb-4 text-white">
          {header}
        </h4>
      </div>
      <div className="w-full grid grid-cols-2 gap-6">
        {jobs.map((job) => (
          <Card
            key={job.company}
            className="shadow-none bg-gray-900 border-gray-800 text-white"
          >
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                {job.role}
                <code>{job.time}</code>
              </CardTitle>
              <CardDescription className="text-gray-300">{`@${job.company}`}</CardDescription>
              <CardDescription className="text-gray-400">
                {job.description}
              </CardDescription>
              <ul className="text-gray-5  00">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </CardHeader>
            <CardFooter className="flex flex-wrap">
              {job.skills.map((skill) => (
                <Button
                  key={skill}
                  className="rounded-full cursor-default mr-2 mb-2"
                  size="sm"
                  variant="outline"
                >
                  {skill}
                </Button>
              ))}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
