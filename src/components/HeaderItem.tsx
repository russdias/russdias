'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

interface Props {
  title: string;
  link: string;
  icon: React.ReactNode;
}

const HeaderItem: React.FC<Props> = ({ title, link, icon }: Props) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`${link}`);
  };

  return (
    <div
      onClick={handleClick}
      className="flex justify-center items-center space-x-2 hover:bg-purple-200 rounded-full px-4 py-2 transition-all duration-500 cursor-pointer"
    >
      {icon}
      <b className="text-sm text-purple-900">{title}</b>
    </div>
  );
};

export default HeaderItem;
