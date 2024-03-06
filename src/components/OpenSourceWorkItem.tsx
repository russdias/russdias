import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import Link from 'next/link';
import { TbBrandGithub } from 'react-icons/tb';

interface Props {
  className?: string;
  span: string;
  gradientStyle: string;
  textStyle: string;
  title: string;
  skills: string[];
  description: string;
  linkTo: string;
}

const OpenSourceWorkItem: React.FC<Props> = ({
  className,
  title,
  span,
  textStyle,
  gradientStyle,
  skills,
  linkTo,
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
        <div className="flex space-x-2">
          <TbBrandGithub className={clsx('w-8 h-8', textStyle)} />
          <h4 className="font-extrabold uppercase mb-2">{title}</h4>
        </div>
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
    </Link>
  );
};

export default OpenSourceWorkItem;
