import clsx from 'clsx';

interface Props {
  text: string;
  className?: string;
}

const Tag = ({ text, className }: Props) => {
  return (
    <div
      className={clsx(
        'text-[10px] uppercase font-bold rounded-full px-2',
        className,
      )}
    >
      <p>{text}</p>
    </div>
  );
};

export default Tag;
