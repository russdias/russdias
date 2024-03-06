'use client';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { skillsData } from '@/lib/constants';
import SkillItem from '@/components/SkillItem';

interface Props {}

const Intro: React.FC<Props> = () => {
  return (
    <div className="p-10 lg:p-0 flex flex-col justify-center items-center text-center pt-32 pb-20 lg:mt-60 lg:mb-40">
      <h1 className="text-8xl text-purple-900 mb-6 font-extrabold lg:h-[200px] w-full">
        <TypeAnimation
          sequence={["Hi, I'm Russ. \n A Full Stack Engineer"]}
          wrapper="span"
          cursor={true}
          style={{ whiteSpace: 'pre-line', display: 'block' }}
        />
      </h1>
      <div className="flex justify-center items-center space-x-4 lg:w-2/3 flex-wrap">
        {skillsData.map((skill, idx) => (
          <SkillItem idx={idx} skill={skill} key={skill.title} />
        ))}
      </div>
    </div>
  );
};

export default Intro;
