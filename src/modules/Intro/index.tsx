import React from "react";
import { Github, Instagram, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import content from "./content";
import Image from "next/image";

interface Props {
  children?: JSX.Element;
}

const Intro = (props: Props) => {
  const { header, description, location, roles } = content;
  return (
    <div
      id="about"
      className="pt-40 flex gap-x-10 justify-center items-center text-white"
    >
      <div className="flex-1">
        <h1 className="">{header}</h1>
        <p className="">{description}</p>
        <div className="space-x-2 space-y-2">
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
        <div className="mt-10 flex space-x-6 ">
          <Github className="h-6 w-6" />
          <Linkedin className="h-6 w-6" />
          <Mail className="h-6 w-6" />
          <Twitter className="h-6 w-6" />
          <Instagram className="h-6 w-6" />
        </div>
      </div>
      <div className="flex-1">
        <code className="bg-purple-800">{location}</code>
        <div className="relative bg-gray-100 h-32 w-full my-4 flex items-end justify-end ml-auto profile-bg rounded-md">
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
