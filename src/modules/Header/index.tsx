'use client';
import { Button } from '@/components/ui/button';
import React from 'react';
import { headerItems } from '@/modules/Header/content';
import { useRouter } from 'next/navigation';

interface Props {
  children?: JSX.Element;
}

const Header = (props: Props) => {
  const router = useRouter();

  return (
    <nav className="fixed top-0 p-4 z-[999]">
      <div className="rounded-full px-6 py-2 flex justify-center items-center backdrop-blur-md bg-purple-500 bg-opacity-20">
        {headerItems.map((item) => (
          <Button
            className="text-purple-300 group hover:text-purple-400"
            onClick={() => {
              router.push(`#${item.title.toLowerCase()}`);
            }}
            variant="link"
          >
            {item.icon}
            {item.title}
          </Button>
        ))}
      </div>
    </nav>
  );
};

export default Header;
