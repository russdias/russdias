'use client';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { skillsData } from '@/lib/constants';
import SkillItem from '@/components/SkillItem';

interface Props {}

const OpenSourceIntro: React.FC<Props> = () => {
  return (
    <div className="p-10 lg:p-0 flex flex-col justify-center items-center text-center pt-32 pb-20 lg:mt-52 lg:mb-40">
      <h1 className="text-8xl text-purple-900 mb-6 font-extrabold lg:h-[100px]">
        <TypeAnimation
          sequence={['Open Source\n Contributions']}
          wrapper="span"
          cursor={true}
          style={{ whiteSpace: 'pre-line', display: 'block' }}
        />
      </h1>
    </div>
  );
};

export default OpenSourceIntro;
