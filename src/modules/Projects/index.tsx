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
import Link from "next/link";

interface Props {
  children?: JSX.Element;
}

const Projects = (props: Props) => {
  const { header, jobs } = content;
  return (
    <div>
      <div>
        <h3 id="projects" className="mb-4 text-white">
          {header}
        </h3>
      </div>
      <div className="w-full grid grid-cols-2 gap-6">
        {jobs.map((job) => (
          <a key={job.company} href={job.linkTo} target="_blank">
            <Card className="shadow-none bg-gray-900 border-gray-800 text-white h-full flex flex-col justify-between">
              <CardHeader>
                <CardTitle>{job.role}</CardTitle>
                <CardDescription className="text-gray-300">{`@${job.company}`}</CardDescription>
                <CardDescription className="text-gray-400">
                  {job.description}
                </CardDescription>
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
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
