import React from 'react';
import content from './content';

interface Props {
  children?: JSX.Element;
}

const Contact = (props: Props) => {
  const { header, descriptionOne, email, descriptionTwo } = content;

  return (
    <div id="contact" className="pt-20">
      <div className="w-full text-center">
        <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl; text-white">
          {header}
        </h2>
        <h2 className="text-white font-normal">
          <span>{descriptionOne}</span>
          <a href={`mailto:${email}`} className="underline text-purple-700">
            {email}
          </a>
          <span>{descriptionTwo}</span>
        </h2>
      </div>
    </div>
  );
};

export default Contact;
