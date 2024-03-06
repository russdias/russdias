import React from 'react';
import Footer from '@/modules/Footer';
import OpenSourceIntro from '@/modules/OpenSourceIntro';
import OpenSourceWork from '@/modules/OpenSourceWork';

interface Props {}

const OpenSource: React.FC<Props> = () => {
  return (
    <main>
      <OpenSourceIntro />
      <OpenSourceWork />
      <Footer />
    </main>
  );
};

export default OpenSource;
