'use client';

import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';

interface Props {}

const Work: React.FC<Props> = () => {
  return (
    <div className="my-10 lg:my-40 flex justify-center items-center flex-col p-10 lg:p-0">
      <h2 className="text-6xl text-purple-900 mb-16 font-bold">
        <span>Contact Me</span>
      </h2>
      <div
        className="mx-auto lg:max-w-6xl w-full grid grid-cols-1 lg:grid-cols-6 gap-8"
        id="contact"
      >
        <div className="group hover:-translate-y-4 transition-transform w-full duration-700 flex justify-center items-center text-center col-span-1 lg:col-span-2 bg-white min-h-60 rounded-3xl bg-gradient-to-b from-purple-300 to-purple-400">
          <h2 className="text-4xl group-hover:scale-125 text-purple-900 font-bold transition-all duration-700">
            <span>
              Want to <br />
              collaborate?
            </span>
          </h2>
        </div>
        <Link
          href="mailto:russ.dias@icloud.com"
          target="_blank"
          className="group hover:-translate-y-4 transition-transform cursor-pointer duration-700 col-span-1 lg:col-span-4 flex flex-col rounded-3xl p-10 w-full bg-gradient-to-r justify-center from-red-50 to-red-300 min-h-60"
        >
          <p className="group-hover:scale-105 text-2xl leading-relaxed text-red-900 transition-all duration-700">
            <TypeAnimation
              sequence={[
                "Reach out to me at \n russ.dias@icloud.com and let's talk!",
              ]}
              wrapper="span"
              cursor={true}
              style={{ whiteSpace: 'pre-line', display: 'block' }}
            />
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Work;
