import React from 'react';
import WorkItem from '@/components/WorkItem';
import { workItemsData } from '@/lib/constants';

interface Props {}

const Work: React.FC<Props> = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center w-full mb-2">
      <p className="text-xs leading-relaxed">
        Designed and Developed by Russell Dias. Built with Next.js, Tailwind
        CSS, and deployed with Vercel.
      </p>
    </div>
  );
};

export default Work;
