import React from "react";

interface Props {
  children?: JSX.Element;
}

const Footer = (props: Props) => {
  return (
    <footer className="py-20 flex justify-center items-center text-center text-white">
      <small>
        Designed and Developed by Russell Dias. <br />
        <br /> Built with Next.js, Shadcn UI, Tailwind CSS, and deployed with
        Vercel.
      </small>
    </footer>
  );
};

export default Footer;
