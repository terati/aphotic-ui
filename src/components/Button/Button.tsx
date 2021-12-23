import * as React from 'react';

const ButtonTypes = ['default', 'primary', 'dashed', 'text'];
export type ButtonType = typeof ButtonTypes[number];

export interface ButtonProps {
  label: string;
  type?: ButtonType;
  icon?: React.ReactNode;
  size?: Number;
  className?: string;
  block?: boolean;
  loading?: boolean;
  children?: React.ReactNode;
}


