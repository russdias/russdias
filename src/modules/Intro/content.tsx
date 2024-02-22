import { Github, Linkedin } from 'lucide-react';
import {
  TbBrandReactNative,
  TbBrandTypescript,
  TbBrandNodejs,
  TbBrandGraphql,
  TbBrandReact,
  TbBrandPython,
  TbBrandGolang,
  TbBrandAws,
  TbBrandDocker,
  TbSql,
  TbBrandJavascript,
} from 'react-icons/tb';

const content = {
  header: 'Russell Dias',
  description:
    'An experienced and passionate software engineer with a track record of consistently delivering high impact solutions that drive business growth and improve user experience at fast-paced startups.',
  roles: [
    {
      title: 'React.js',
      icon: <TbBrandReact className="mr-2 h-4 w-4" />,
    },
    {
      title: 'JavaScript',
      icon: <TbBrandJavascript className="mr-2 h-4 w-4" />,
    },
    {
      title: 'TypeScript',
      icon: <TbBrandTypescript className="mr-2 h-4 w-4" />,
    },
    {
      title: 'Node.js',
      icon: <TbBrandNodejs className="mr-2 h-4 w-4" />,
    },
    {
      title: 'GraphQL',
      icon: <TbBrandGraphql className="mr-2 h-4 w-4" />,
    },
    {
      title: 'React Native',
      icon: <TbBrandReactNative className="mr-2 h-4 w-4" />,
    },
    {
      title: 'Python',
      icon: <TbBrandPython className="mr-2 h-4 w-4" />,
    },
    {
      title: 'Golang',
      icon: <TbBrandGolang className="mr-2 h-4 w-4" />,
    },
    {
      title: 'AWS',
      icon: <TbBrandAws className="mr-2 h-4 w-4" />,
    },
    {
      title: 'Docker',
      icon: <TbBrandDocker className="mr-2 h-4 w-4" />,
    },
    {
      title: 'SQL',
      icon: <TbSql className="mr-2 h-4 w-4" />,
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
