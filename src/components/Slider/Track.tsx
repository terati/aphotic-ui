import * as React from 'react';
import { prefix } from '../../config';
import classNames from 'classnames';

export interface TrackProps {
  // className: 
  filled: number;
  offset?: number;
  size?: number;
  color?: string;
  children?: React.ReactNode;
  min: number;
  max: number;
  // onChange(value: number): void;
  onClick?(event?: React.MouseEvent<HTMLDivElement>): void;
  onMouseDown?(event?: React.MouseEvent<HTMLDivElement>): void;
  onMouseEnter?(event?: React.MouseEvent<HTMLDivElement>): void;
  onMouseLeave?(event?: React.MouseEvent<HTMLDivElement>): void;
  onTouchStart?(event?: React.TouchEvent<HTMLDivElement>): void;
  onTouchMove?(event?: React.TouchEvent<HTMLDivElement>): void;
  disabled: boolean;
}

const Track = React.forwardRef<HTMLDivElement, TrackProps>((props, ref) => {
  const {
    children,
    onClick,
    onMouseDown,
    onMouseLeave, 
    onMouseEnter,
    onTouchStart,
    onTouchMove
  } = props;

  const TrackClasses = classNames( {
    [`${prefix}--slider`]: true,
  });

  return (
    <div
      className={TrackClasses}
      onClick={onClick}
      onMouseDown={onMouseDown}
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      ref={ref}
    > 
      { children }
    </div>
  )
})

export default Track;