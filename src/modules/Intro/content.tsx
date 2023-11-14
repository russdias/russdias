import { AppWindow, Code, Github, Linkedin, Rocket } from 'lucide-react';

const content = {
  header: 'Russell Dias',
  description:
    'Senior product and engineering professional with 6+ years of experience. Currently, I’m a full-stack engineering lead at YLabs, heading serverless efforts and optimizing cloud infrastructure costs. I’m also a serial tech founder with three scalable startups, including Fluxforms (an AI-based forms analytics tool), Parentheses Labs (a software consultancy), and Blip Chat (an AI-powered virtual assistant).',
  roles: [
    {
      title: 'Tech Founder',
      icon: <Rocket className="mr-2 h-4 w-4" />,
    },
    {
      title: 'Product Owner',
      icon: <AppWindow className="mr-2 h-4 w-4" />,
    },
    {
      title: 'Engineering',
      icon: <Code className="mr-2 h-4 w-4" />,
    },
  ],
  socials: [
    {
      icon: <Github className="h-6 w-6 cursor-pointer" />,
      linkTo: 'https://github.com/russelldias98',
    },
    {
      icon: <Linkedin className="h-6 w-6 cursor-pointer" />,
      linkTo: 'https://www.linkedin.com/in/russell-dias',
    },
  ],
};

export default content;
