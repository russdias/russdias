import React from 'react';
import { openSourceWorkItemsData } from '@/lib/constants';
import OpenSourceWorkItem from '@/components/OpenSourceWorkItem';

interface Props {}

const OpenSourceWork: React.FC<Props> = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center w-full scroll-mt-40 mb-20">
      <div className="mx-auto p-10 lg:p-0 lg:max-w-6xl w-full grid grid-cols-1 lg:grid-cols-6 gap-8">
        {openSourceWorkItemsData.map((el, idx) => (
          <OpenSourceWorkItem
            skills={el.skills}
            key={idx}
            title={el.title}
            span={el.span}
            gradientStyle={el.gradient}
            textStyle={el.text}
            description={el.description}
            linkTo={el.linkTo}
          />
        ))}
      </div>
    </div>
  );
};

export default OpenSourceWork;
