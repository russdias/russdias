import { AppWindow, Code, Github, Linkedin, Rocket } from "lucide-react";

const content = {
  header: "Russell Dias",
  description:
    "An entrepreneur, software engineer, and product owner with a passion for building products that solve real-world problems.",
  roles: [
    {
      title: "Tech Founder",
      icon: <Rocket className="mr-2 h-4 w-4" />,
    },
    {
      title: "Product Owner",
      icon: <AppWindow className="mr-2 h-4 w-4" />,
    },
    {
      title: "Engineering",
      icon: <Code className="mr-2 h-4 w-4" />,
    },
  ],
  socials: [
    {
      icon: <Github className="h-6 w-6 cursor-pointer" />,
      linkTo: "https://github.com/russelldias98",
    },
    {
      icon: <Linkedin className="h-6 w-6 cursor-pointer" />,
      linkTo: "https://www.linkedin.com/in/russell-dias",
    },
  ],
};

export default content;
