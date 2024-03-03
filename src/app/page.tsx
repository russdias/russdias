import React from 'react';
import Intro from '@/modules/Intro';
import Work from '@/modules/Work';
import Contact from '@/modules/Contact';
import Footer from '@/modules/Footer';

interface Props {}

const Home: React.FC<Props> = () => {
  return (
    <main>
      <Intro />
      <Work />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
