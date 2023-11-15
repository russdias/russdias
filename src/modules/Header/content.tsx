import { Contact, DraftingCompass, Paperclip } from 'lucide-react';

export const headerItems = [
  {
    title: 'Experience',
    linkTo: '#experience',
    icon: <DraftingCompass className="w-4 h-4 mr-2" />,
  },
  {
    title: 'Contact',
    linkTo: '#contact',
    icon: <Contact className="w-4 h-4 mr-2" />,
  },
  {
    title: 'Resume',
    linkTo: '/resume.pdf',
    icon: <Paperclip className="w-4 h-4 mr-2" />,
  },
];
