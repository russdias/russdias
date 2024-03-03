import React from 'react';

interface Props {}

const Work: React.FC<Props> = () => {
  return (
    <div
      className="flex flex-col justify-center items-center text-center w-full my-40"
      id="contact"
    >
      <h2 className="text-6xl text-purple-900 font-bold">
        <span>Want to collaborate?</span>
      </h2>
      <p className="text-2xl leading-relaxed">
        Reach out to me at{' '}
        <a className="underline" href="mailto:russ.dias@icloud.com">
          russ.dias@icloud.com
        </a>{' '}
        and let's talk!
      </p>
    </div>
  );
};

export default Work;
