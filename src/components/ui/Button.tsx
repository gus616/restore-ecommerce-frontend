import React from 'react';

type ButtonProps = {
  label: string;
  onClick?: () => void;
  bgColor?: string;
  textColor?: string;
  hoverBgColor?: string;
  hoverTextColor?: string;
  paddingX?: string;
  paddingY?: string;
  fontSize?: string;
  width?: number | null;
};

const Button = ({
  label,
  onClick,
  bgColor = 'white',
  textColor = 'black',
  hoverBgColor = 'gray-100',
  hoverTextColor = 'black',
  paddingX = '4',
  paddingY = '4',
  fontSize = 'sm',
  width = null,
}: ButtonProps) => {
  const widthClass = width ? `w-[${width}px]` : 'w-full';

  const classes = [
    widthClass,
    'rounded-full',
    'border',
    `px-${paddingX}`,
    `py-${paddingY}`,
    `text-${fontSize}`,
    `bg-${bgColor}`,
    `text-${textColor}`,
    `hover:bg-${hoverBgColor}`,
    `hover:text-${hoverTextColor}`,
    'cursor-pointer',
  ].join(' ');

  return (
    <button className={classes} onClick={onClick}>
      <span>{label}</span>
    </button>
  );
};

export default Button;
