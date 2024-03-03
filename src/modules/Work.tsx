import React from 'react';
import WorkItem from '@/components/WorkItem';
import { workItemsData } from '@/lib/constants';

interface Props {}

const Work: React.FC<Props> = () => {
  return (
    <div
      className="flex flex-col justify-center items-center text-center w-full scroll-mt-40"
      id="work"
    >
      <h2 className="text-6xl text-purple-900 mb-16 font-bold">
        <span>My Work</span>
      </h2>
      <div className="mx-auto max-w-6xl w-full grid grid-cols-6 gap-8">
        {workItemsData.map((el, idx) => (
          <WorkItem
            skills={el.skills}
            key={idx}
            company={el.company}
            span={el.span}
            gradientStyle={el.gradient}
            textStyle={el.text}
            description={el.description}
            linkTo={el.linkTo}
            image={el.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Work;
