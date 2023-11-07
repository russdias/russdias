import React from "react";
import { Button } from "@/components/ui/button";
import content from "./content";
import Image from "next/image";
import { MapPin } from "lucide-react";

interface Props {
  children?: JSX.Element;
}

const Intro = (props: Props) => {
  const { header, description, roles, socials } = content;
  return (
    <div
      id="about"
      className="pt-40 flex gap-x-10 justify-center items-end text-white"
    >
      <div className="flex-1">
        <h1 className="">{header}</h1>
        <p className="">{description}</p>
        <div className="space-x-2 space-y-2 mt-4">
          {roles.map((role) => (
            <Button
              className="cursor-default"
              size="sm"
              key={role.title}
              variant="secondary"
            >
              {role.icon}
              {role.title}
            </Button>
          ))}
        </div>
        <div className="mt-10 flex space-x-6">
          {socials.map((social) => (
            <a href={social.linkTo} key={social.linkTo} target="_blank">
              {social.icon}
            </a>
          ))}
        </div>
      </div>
      <div className="flex-1">
        <div className="mt-4 relative bg-gray-100 h-40 w-full flex items-end justify-end ml-auto profile-bg rounded-md">
          <Image
            src="/russ.png"
            width={350}
            height={200}
            alt="Picture of the Russell Dias"
            className="rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
