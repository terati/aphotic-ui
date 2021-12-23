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



const Button: React.ForwardRefRenderFunction<unknown, ButtonProps> = (props, ref) => {
  const {
    type,
    icon,
    size,
    className,
    block = false,
    loading = false,
    children,
    ...rest
  } = props;

  const [buttonLoading, setLoading] = React.useState<number | boolean>(!!loading);
  const buttonRef = React.createRef<HTMLElement>();

  const handleClick = (e: React.MouseEvent) => {
    const { onClick, disabled } = props;
    if (buttonLoading || disabled) {
        e.preventDefault;
        return;
    }
  }

  const buttonNode = (
    <button
        className={classes}
        onClick={handleClick}
      > 
      {props.label} 
        
      </button>
  )

  return buttonNode;
}

export default Button
