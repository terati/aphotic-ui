import * as React from 'react';
import { prefix } from '../../config';
import classNames from 'classnames';

export interface TrackProps {
  // className: 
  filled: number;
  offset?: number;
  size?: number;
  color?: string;
  min: number;
  max: number;
  children: React.ReactNode;
  // onChange(value: number): void;
  onMouseEnter?(event?: React.MouseEvent<HTMLDivElement>): void;
  onMouseLeave?(event?: React.MouseEvent<HTMLDivElement>): void;
  disabled: boolean;
}

function Track({
  filled,
  offset,
  size,
  color,
  min,
  max,
  children,
  onMouseEnter,
  onMouseLeave,
  disabled,
  ...others
}: TrackProps) {

  const TrackClasses = classNames( {
    [`${prefix}--slider`]: true,
  });

  return (
    <div 
      className={TrackClasses}
      onMouseLeave={onMouseLeave} 
      onMouseEnter={onMouseEnter}> 

      {children}

    </div>
  )
}

export default Track;