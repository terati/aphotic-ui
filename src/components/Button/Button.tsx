import * as React from 'react';
import styled from '@emotion/styled';

import {ButtonHTMLAttributes} from 'react'

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
  /**
   * Inherited clicking
   */
  onClick?: React.MouseEventHandler<HTMLElement>;
  /**
   * Option to disable
   */
  disabled?: boolean;
  
  children?: React.ReactNode;

  styles?: {};
}

function isReactFragment(node: React.ReactNode) {
  return React.isValidElement(node) && node.type == React.Fragment;
}

const RootButton = styled('button') <ButtonHTMLAttributes<HTMLButtonElement>> (
  {
    backgroundColor: 'black',
    // background: 'inherit',
    border: 1,
    borderRadius: '10px',
    color: 'white',
    cursor: 'pointer',
    fontFamily: 'inherit',
    fontSize: 'inherit',
    margin: 0,
    outline: 1,
    padding: 10,
    textAlign: 'inherit'
  }
)

const InternalButton: React.ForwardRefRenderFunction<unknown, ButtonProps> = (props, ref) => {
  const {
    type,
    icon,
    label,
    size = 'medium',
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
    <RootButton
        // className={classes}
        onClick={handleClick}
      > 
      {label} 
        
    </RootButton>
  )

  return buttonNode;
}

const Button = React.forwardRef<unknown, ButtonProps>(InternalButton);

export default Button
