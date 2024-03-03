import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import Link from 'next/link';

interface Props {
  className?: string;
  span: string;
  gradientStyle: string;
  textStyle: string;
  company: string;
  skills: string[];
  description: string;
  linkTo: string;
  image: string;
}

const WorkItem: React.FC<Props> = ({
  className,
  company,
  span,
  textStyle,
  gradientStyle,
  skills,
  linkTo,
  image,
  description,
}) => {
  return (
    <Link
      referrerPolicy="no-referrer"
      href={linkTo}
      target="_blank"
      className={clsx(
        'hover:shadow-xl transition-transform flex flex-col justify-between duration-500 cursor-pointer group hover:-translate-y-4 overflow-hidden rounded-3xl w-full text-left',
        gradientStyle,
        textStyle,
        span,
        className,
      )}
    >
      <div className="p-10 transition-transform duration-300">
        <h4 className="font-extrabold uppercase mb-2">{company}</h4>
        <p className="font-medium text-lg">{description}</p>
        <div className="flex flex-wrap mt-6 w-3/4">
          {skills.map((skill, index) => (
            <span key={skill} className="text-xs font-bold uppercase mr-2 mb-2">
              <span className="mr-2">{skill}</span>
              {index !== skills.length - 1 && <span>•</span>}
            </span>
          ))}
        </div>
      </div>
      <div className="flex justify-end items-end group-hover:scale-110 transition-transform duration-700 h-full">
        <Image src={image} width={400} height={400} alt="Image" />
      </div>
    </Link>
  );
};

export default WorkItem;
