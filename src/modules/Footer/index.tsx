import React from "react";
import { content } from "./content";

interface Props {
  children?: JSX.Element;
}

const Footer = (props: Props) => {
  const { header } = content;
  return (
    <footer className="lg:py-20 flex justify-center items-center text-center text-white">
      {header}
    </footer>
  );
};

export default Footer;
