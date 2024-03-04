import { Briefcase, Mail } from 'lucide-react';
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

export const workItemsData = [
  {
    gradient: 'bg-gradient-to-b from-blue-300 to-blue-400',
    text: 'text-blue-900',
    span: 'col-span-1 lg:col-span-3',
    company: 'YLabs (Cyberrwanda)',
    linkTo: 'https://cyberrwanda.org/',
    skills: [
      'React',
      'React Native',
      'NextJS',
      'AWS Serverless',
      'NodeJS',
      'TypeScript',
      'GraphQL',
      'PostgreSQL',
    ],
    description:
      'CyberRwanda is a fun, interactive digital platform that equips Rwandan youth aged 12-19 years with sexual and reproductive health knowledge, job skills, and streamlined access to quality products and services',
    image: '/mockups/cyberrwanda.png',
  },
  {
    gradient: 'bg-gradient-to-b from-purple-300 to-purple-400',
    text: 'text-purple-900',
    span: 'col-span-1 lg:col-span-3',
    company: 'Thena',
    linkTo: 'https://thena.ai/',
    skills: ['React', 'NextJS', 'TypeScript', 'NodeJS', 'MongoDB'],
    description:
      'Thena is a Slack-based customer engagement platform that organizes shared channels, tags requests, integrates with tools, and analyzes customer behavior.',
    image: '/mockups/thena.png',
  },
  {
    gradient: 'bg-gradient-to-b from-cyan-300 to-cyan-400',
    text: 'text-cyan-900',
    span: 'col-span-1 lg:col-span-2',
    company: 'Taloflow',
    linkTo: 'https://taloflow.ai/',
    skills: ['React', 'NextJS', 'MongoDB', 'GraphQL'],
    description:
      'Taloflow is a technology selection platform that generates detailed requirements and evaluates vendor capabilities in minutes.',
    image: '/mockups/taloflow.png',
  },
  {
    gradient: 'bg-gradient-to-b from-red-300 to-red-400',
    text: 'text-red-900',
    span: 'col-span-1 lg:col-span-4',
    company: 'FluxForms',
    linkTo: 'https://fluxforms.xyz/',
    skills: ['React', 'Node', 'TypeScript', 'PostgreSQL', 'NextJS'],
    description:
      'Mo-code form builder enables effortless data collection and provides powerful insights through dashboards and charts, simplifying the start and ongoing analysis for users.',
    image: '/mockups/fluxforms.png',
  },
  {
    gradient: 'bg-gradient-to-b from-blue-300 to-blue-400',
    text: 'text-blue-900',
    span: 'col-span-1 lg:col-span-3',
    company: 'Archimydes',
    linkTo: 'https://archimydes.dev/',
    skills: [
      'React',
      'React Native',
      'NextJS',
      'AWS Serverless',
      'NodeJS',
      'TypeScript',
      'GraphQL',
      'PostgreSQL',
    ],
    description:
      'Archimydes is a software consulting firm offering scalable solutions and services like software development, system integration, and IT consulting to help businesses achieve their goals.',
    image: '/mockups/archimydes.png',
  },
  {
    gradient: 'bg-gradient-to-b from-yellow-300 to-yellow-400',
    text: 'text-yellow-900',
    span: 'col-span-1 lg:col-span-3',
    company: 'Conwaste',
    linkTo:
      'https://play.google.com/store/apps/details?id=com.conwaste.app&hl=en&gl=US',
    skills: ['React', 'NextJS', 'TypeScript', 'NodeJS', 'MongoDB'],
    description:
      'The Municipal Waste Management app simplifies waste handling in Puerto Rico, offering schedules, guides, and a reporting feature to enhance environmental efforts.',
    image: '/mockups/conwaste.png',
  },
];

export const headerItemData = [
  {
    title: 'Work',
    link: '#work',
    icon: <Briefcase className="w-4 h-4 text-purple-900" />,
  },
  {
    title: 'Contact',
    link: '#contact',
    icon: <Mail className="w-4 h-4 text-purple-900" />,
  },
];

export const skillsData = [
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
];

export const skillColors = [
  {
    bgColor: 'bg-blue-100 border border-blue-200',
    textColor: 'text-blue-900',
  },
  {
    bgColor: 'bg-yellow-100 border border-yellow-200',
    textColor: 'text-yellow-900',
  },
  {
    bgColor: 'bg-indigo-100 border border-indigo-200',
    textColor: 'text-indigo-900',
  },
  {
    bgColor: 'bg-green-100 border border-green-200',
    textColor: 'text-green-900',
  },
  {
    bgColor: 'bg-pink-100 border border-pink-200',
    textColor: 'text-pink-900',
  },
  {
    bgColor: 'bg-cyan-100 border border-cyan-200',
    textColor: 'text-cyan-900',
  },
  {
    bgColor: 'bg-orange-100 border border-orange-200',
    textColor: 'text-orange-900',
  },
  {
    bgColor: 'bg-teal-100 border border-teal-200',
    textColor: 'text-teal-900',
  },
  {
    bgColor: 'bg-purple-100 border border-purple-200',
    textColor: 'text-purple-900',
  },
  {
    bgColor: 'bg-slate-100 border border-slate-200 ',
    textColor: 'text-slate-900',
  },
  {
    bgColor: 'bg-red-100 border border-red-200 ',
    textColor: 'text-red-900',
  },
];
