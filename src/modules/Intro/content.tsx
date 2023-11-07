import { AppWindow, Code, Github, Linkedin, Rocket } from "lucide-react";

const content = {
  header: "Russell Dias",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nemo laboriosam corporis cupiditate, commodi modi ipsum soluta mollitia ut unde harum omnis?",
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
