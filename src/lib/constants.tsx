import { Briefcase, Code, Mail } from 'lucide-react';
import {
  TbBrandAws,
  TbBrandDocker,
  TbBrandGolang,
  TbBrandGraphql,
  TbBrandJavascript,
  TbBrandNodejs,
  TbBrandPython,
  TbBrandReact,
  TbBrandReactNative,
  TbBrandTypescript,
  TbSql,
} from 'react-icons/tb';

export const openSourceWorkItemsData = [
  {
    gradient: 'bg-gradient-to-b from-cyan-300 to-cyan-400',
    text: 'text-cyan-900',
    span: 'col-span-1 lg:col-span-4',
    title: 'Beautiful Todos',
    linkTo: 'https://github.com/russelldias98/beautiful-todos',
    skills: ['React', 'NextJS', 'tRPC', 'NodeJS', 'TypeScript', 'PostgreSQL'],
    description: 'A dead simple todo app that helps you get things done.',
  },
  {
    gradient: 'bg-gradient-to-b from-red-300 to-red-400',
    text: 'text-red-900',
    span: 'col-span-1 lg:col-span-2',
    title: 'Binary Search in TypeScript',
    linkTo: 'https://github.com/russelldias98/binary-search-typescript',
    skills: ['TypeScript', 'JavaScript', 'Algorithm'],
    description: 'Binary search implementation in TypeScript.',
  },
  {
    gradient: 'bg-gradient-to-b from-green-300 to-green-400',
    text: 'text-green-900',
    span: 'col-span-1 lg:col-span-2',
    title: 'Array Chunk in TypeScript',
    linkTo: 'https://github.com/russelldias98/array-chunk-typescript',
    skills: ['TypeScript', 'JavaScript', 'Algorithm'],
    description:
      'A simple utility function to split an array into chunks of a specified size.',
  },
  {
    gradient: 'bg-gradient-to-b from-orange-300 to-orange-400',
    text: 'text-orange-900',
    span: 'col-span-1 lg:col-span-4',
    title: 'User Auth with GraphQL',
    linkTo: 'https://github.com/russelldias98/User-Auth-GraphQL-Apollo',
    skills: [
      'Apollo',
      'NodeJS',
      'GraphQL',
      'MongoDB',
      'Redis',
      'Docker',
      'Ngnix',
    ],
    description:
      'A simple user authentication system using GraphQL and Apollo.',
  },
  {
    gradient: 'bg-gradient-to-b from-purple-300 to-purple-400',
    text: 'text-purple-900',
    span: 'col-span-1 lg:col-span-4',
    title: 'Fastboot Tool',
    linkTo: 'https://github.com/russelldias98/fastboot-tool',
    skills: ['Linux', 'Shell', 'Bash', 'Android', 'Fastboot', 'ADB'],
    description:
      'Fastboot Tool Helps Linux Users to quickly flash recovery.img or boot.img through Fastboot onto their device',
  },
  {
    gradient: 'bg-gradient-to-b from-blue-300 to-blue-400',
    text: 'text-blue-900',
    span: 'col-span-1 lg:col-span-2',
    title: 'Flash My zImage',
    linkTo: 'https://github.com/russelldias98/flash-my-zImage',
    skills: ['Linux', 'Shell', 'Bash', 'Android', 'Fastboot', 'ADB'],
    description:
      'Flash My zImage helps users to easily make a flashable zip of their compiled zImage in 1 Script',
  },
  {
    gradient: 'bg-gradient-to-b from-slate-300 to-slate-400',
    text: 'text-slate-900',
    span: 'col-span-1 lg:col-span-6',
    title: 'Kernel Tool',
    linkTo: 'https://github.com/russelldias98/Kernel-Tool',
    skills: ['Linux', 'Shell', 'Bash', 'Android', 'Fastboot', 'ADB'],
    description:
      'Kernel Tool helps users to unpack, pack, make a flashable zip for the kernel(boot.img)',
  },
];
export const workItemsData = [
  {
    gradient: 'bg-gradient-to-b from-red-300 to-red-400',
    text: 'text-red-900',
    span: 'col-span-1 lg:col-span-6',
    company: 'Databricks',
    linkTo: 'https://databricks.com/',
    skills: ['React', 'Golang', 'TypeScript', 'Apache Spark', 'Data Engineering'],
    description:
      'Working at the Lakebase team at Databricks, building next-generation data lakehouse solutions and platforms for unified analytics and AI.',
    image: '/mockups/neon.png', // You may want to add a databricks mockup image later
    currentJob: true,
    tagClassName: 'bg-red-100',
  },
  {
    gradient: 'bg-gradient-to-b from-green-300 to-green-400',
    text: 'text-green-900',
    span: 'col-span-1 lg:col-span-6',
    company: 'Neon',
    linkTo: 'https://neon.tech/',
    skills: ['React', 'Golang', 'TypeScript', 'PostgreSQL'],
    description:
      'Built the fully managed serverless Postgres platform with separated storage and compute for autoscaling, branching, and bottomless storage. Acquired by Databricks for $1 billion.',
    image: '/mockups/neon.png',
    currentJob: false,
    tagClassName: 'bg-green-100',
  },
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
    link: '/#work',
    icon: <Briefcase className="w-4 h-4 text-purple-900" />,
  },
  {
    title: 'Contact',
    link: '/#contact',
    icon: <Mail className="w-4 h-4 text-purple-900" />,
  },
  {
    title: 'Open Source',
    link: '/open-source',
    icon: <Code className="w-4 h-4 text-purple-900" />,
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
