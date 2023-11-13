import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import content from './content';

interface Props {
  children?: JSX.Element;
}

const Experience = (props: Props) => {
  const { header, jobs } = content;
  return (
    <div>
      <div>
        <h3 id="experience" className="mb-4 text-white">
          {header}
        </h3>
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-5">
        {jobs.map((job, idx) => (
          <a key={job.company} href={job.linkTo} target="_blank">
            <Card
              className={`hover:bg-purple-950 animate transition-all duration-200 hover:scale-[1.02] shadow-none bg-gray-900 border-gray-800 text-white h-full flex flex-col justify-between`}
            >
              <CardHeader>
                <CardTitle>{job.role}</CardTitle>
                <CardDescription className="text-gray-300">{`@${job.company}`}</CardDescription>
                {job.description && (
                  <CardDescription className="text-gray-400">
                    {job.description}
                  </CardDescription>
                )}
                {job.points && (
                  <ul>
                    {job.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                )}
              </CardHeader>
              <CardFooter className="flex flex-wrap">
                {job.skills.map((skill) => (
                  <Button
                    key={skill}
                    className="rounded-full mr-2 mb-2"
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

export default Experience;
