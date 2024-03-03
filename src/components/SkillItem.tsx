import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import Link from 'next/link';
import { skillColors } from '@/lib/constants';

interface Props {
  skill: {
    title: string;
    icon: React.ReactNode;
  };
  idx: number;
}

const SkillItem: React.FC<Props> = ({ skill: { icon, title }, idx }) => {
  return (
    <div
      key={title}
      className={clsx(
        'flex items-center justify-center rounded-lg px-3 py-1 mb-3 hover:-translate-y-1 transition-transform duration-700',
        skillColors[idx].bgColor,
      )}
    >
      <span className={skillColors[idx].textColor}>{icon}</span>
      <p className={clsx('text-sm', skillColors[idx].textColor)}>{title}</p>
    </div>
  );
};

export default SkillItem;
