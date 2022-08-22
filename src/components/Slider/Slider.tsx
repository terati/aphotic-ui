import * as React from 'react';
import classNames from 'classnames';
import Track from './Track';

import { prefix } from '../../config';

export interface SliderProps {
  /** optional additional classNames */
  className?: string;

  /** label */
  label?: string;

  /** Radius of slider track */
  size?: number;

  /** Radius of the selection thumb. */
  radius?: number;

  /** Minimum possible slider value */
  min?: number;

  /** Maximum possible slider value */
  max?: number;

  /** Factor by which value is incremented or decremented by drag of arrows */
  step?: number;

  /** number of digits after the deicimal point rounded */
  precision?: number;

  /** default value of the slider */
  defaultValue?: number;

  /** Disables slider */
  disabled?: boolean;

  showLabelOnHover?: boolean;

}

const Slider = React.forwardRef<HTMLDivElement, SliderProps>((props: SliderProps, ref) => {
  const {
    className, 
    size,
    radius = 10,
    min = 0,
    max = 100,
    step,
    disabled = false,
    showLabelOnHover = true,
  } = props;

  const [hovered, setHovered] = React.useState(false);

  const TrackClasses = classNames(className, {
    [`${prefix}--slider`]: true,
  });

  const handleThumbMouseDown = (
    event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
  ) => {
    event.preventDefault;
    event.stopPropagation;
  }

  return (
    <div>
      <Track 
        // className={TrackClasses}
        filled={0}
        offset={0}
        size={size}
        // radius={radius}
        min={min}
        max={max}
        onMouseEnter={showLabelOnHover ? () => setHovered(true) : undefined}
        onMouseLeave={showLabelOnHover ? () => setHovered(true) : undefined}
        disabled={disabled}
      >
      
      </Track>

    </div>
  )
});

// Slider.displayName = '@aphotic/slider';
export default Slider;


