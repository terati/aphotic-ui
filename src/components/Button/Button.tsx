import * as React from 'react';
import styled from '@emotion/styled';
import classNames from 'classnames';
import Spinner from '../Loaders/Spinner/Spinner';

import { ButtonHTMLAttributes } from 'react';
import { prefix } from '../../config';

type ButtonTypes = 
| 'contained'
| 'outlined'
| 'ghost'
| 'contained--danger'
| 'outlined--danger'
| 'ghost--danger';

export interface ButtonProps {
  /** Button content label */
  label?: string;
  
  /** Button comes in 4 styles that can be selected: default, primary, dashed, or text */
  variant?: ButtonTypes;
  
  /** An optional button image can be provided */
  icon?: React.ReactNode;
  
  /** Button provided sizes in the following 3 size */
  size?: 'small' | 'medium' | 'large';
  
  /** Optional class label */
  className?: string;
  
  /** Determines if the button takes the entirety of parent object */
  block?: boolean;
  
  /** Option to disable */
  isDisabled?: boolean;

  /** Button can enter loading state */
  loading?: boolean;

  loadingPosition?: 'start' | 'middle' | 'end';
  
  /** Inherited clicking */
  onClick?: React.MouseEventHandler<HTMLElement>;
  
  children?: React.ReactNode;

  styles?: {};

  tabIndex?: number;
}

function isReactFragment(node: React.ReactNode) {
  return React.isValidElement(node) && node.type == React.Fragment;
}

const InternalButton: React.ForwardRefRenderFunction<unknown, ButtonProps> = (props, ref) => {
  const {
    isDisabled = false, 
    variant = 'contained',
    icon,
    label,
    size = 'medium',
    className,
    block = false,
    loading = false,
    loadingPosition = 'middle',
    children,
    styles,
    tabIndex = 0,
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

  const generalClasses = classNames(className, {
    [`${prefix}--btn`]: true,
    [`${prefix}--btn--outlined`]: (variant === 'outlined'),
    [`${prefix}--btn--ghost`]: (variant === 'ghost'),
    [`${prefix}--btn--contained--danger`]: (variant === 'contained--danger'),
    [`${prefix}--btn--outlined--danger`]: (variant === 'outlined--danger'),
    [`${prefix}--btn--ghost--danger`]: (variant === 'ghost--danger'),

    [`${prefix}--btn--small`]: (size === 'small'),
    [`${prefix}--btn--medium`]: (size === 'medium'),
    [`${prefix}--btn--large`]: (size === 'large')

  });

  const RootButton = styled('button') <ButtonHTMLAttributes<HTMLButtonElement>> (
    {
      ...styles
    }
  )

  const buttonNode = (
    <RootButton
      disabled={isDisabled}
      onClick={handleClick}
      className={generalClasses}
      tabIndex={tabIndex}
      {...rest}
    > 
      { (loading && (loadingPosition == 'start')) && <Spinner size={'small'} /> }
      { children } 
      { (loading && (loadingPosition == 'end')) && <Spinner size={'small'}/> }
        
    </RootButton>
  )

  return buttonNode;
}

const Button = React.forwardRef<unknown, ButtonProps>(InternalButton);

export default Button
