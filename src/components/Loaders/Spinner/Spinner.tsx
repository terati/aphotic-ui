import * as React from 'react';
import { prefix } from '../../../config';
import classNames from 'classnames';

const sizeMap = {
  small: '16px',
  medium: '32px',
  large: '64px',
}

export interface SpinnerProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
  tileColor?: string;
  pathColor?: string;
}

const Spinner = ({
  size = 'medium',
  className,
  tileColor = 'currentColor',
  pathColor = 'currentColor',
  ...props
}: SpinnerProps) => {

  const classes = classNames(className, {
    [`${prefix}--spinner`]: true,
  })

  return (
    <>
      <svg height={sizeMap[size]} width={sizeMap[size]} viewBox='0 0 16 16' fill="none" className={classes} {...props}>
        <circle
          cx="8"
          cy="8"
          r="7"
          stroke={pathColor}
          strokeOpacity="0.25"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M15 8a7.002 7.002 0 00-7-7"
          stroke={tileColor}
          strokeWidth="2"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </>
  )
}

export default Spinner
