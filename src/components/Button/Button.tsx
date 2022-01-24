import * as React from 'react';

const ButtonTypes = ['default', 'primary', 'dashed', 'text'];
export type ButtonType = typeof ButtonTypes[number];

export interface ButtonProps {
  /**
   * Button content label
   */
  label?: string;
  /**
   * Button comes in 4 styles that can be selected: default, primary, dashed, or text
   */
  type?: ButtonType;
  /**
   * An optional button image can be provided
   */
  icon?: React.ReactNode;
  /** 
   * Button provided sizes in the following 3 size.
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Optional class label
   */
  className?: string;
  /**
   * determines if the button takes the entirety of parent object
   */
  block?: boolean;
  /**
   * Button can enter loading state
   */
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
