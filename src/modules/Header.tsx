import React from 'react';
import HeaderItem from '@/components/HeaderItem';
import { headerItemData } from '@/lib/constants';

interface Props {}

const Header: React.FC<Props> = () => {
  return (
    <nav className="bg-purple-400/30 z-[999] rounded-full flex px-8 py-2 space-x-4 mt-6 fixed top-0 backdrop-blur-lg">
      {headerItemData.map((el) => (
        <HeaderItem
          key={el.title}
          title={el.title}
          link={el.link}
          icon={el.icon}
        />
      ))}
    </nav>
  );
};

export default Header;
