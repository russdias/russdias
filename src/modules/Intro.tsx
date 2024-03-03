'use client';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { skillsData } from '@/lib/constants';
import SkillItem from '@/components/SkillItem';

interface Props {}

const Intro: React.FC<Props> = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center mt-60 mb-40">
      <h1 className="text-8xl text-purple-900 mb-6 font-extrabold h-[200px]">
        <TypeAnimation
          sequence={["Hi, I'm Russ. \n A Frontend Engineer"]}
          wrapper="span"
          cursor={true}
          style={{ whiteSpace: 'pre-line', display: 'block' }}
        />
      </h1>
      <div className="flex justify-center items-center space-x-4 w-2/3 flex-wrap">
        {skillsData.map((skill, idx) => (
          <SkillItem idx={idx} skill={skill} key={skill.title} />
        ))}
      </div>
    </div>
  );
};

export default Intro;
