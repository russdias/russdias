import { AppWindow, Code, Rocket } from "lucide-react";

const content = {
  header: "Russell Dias",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nemo laboriosam corporis cupiditate, commodi modi ipsum soluta mollitia ut unde harum omnis?",
  location: "📍 Remote",
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
};

export default content;
