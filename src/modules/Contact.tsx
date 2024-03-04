'use client';

import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';

interface Props {}

const Work: React.FC<Props> = () => {
  return (
    <div className="my-40 flex justify-center items-center flex-col">
      <h2 className="text-6xl text-purple-900 mb-16 font-bold">
        <span>Contact Me</span>
      </h2>
      <div
        className="mx-auto max-w-6xl w-full grid grid-cols-6 gap-8"
        id="contact"
      >
        <div className="group hover:-translate-y-4 transition-transform duration-700 flex justify-center items-center text-center col-span-2 bg-white min-h-96 rounded-3xl bg-gradient-to-b from-purple-300 to-purple-400">
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
          className="group hover:-translate-y-4 transition-transform cursor-pointer duration-700 col-span-4 flex flex-col justify-center rounded-3xl items-center text-center w-full bg-gradient-to-b from-red-50 to-red-100 min-h-96"
        >
          <p className="group-hover:scale-110 text-2xl leading-relaxed text-red-900 transition-all duration-700">
            <TypeAnimation
              sequence={[
                "Reach out to me at russ.dias@icloud.com and let's talk!",
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
