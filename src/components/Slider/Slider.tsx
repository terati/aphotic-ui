import * as React from 'react';
import classNames from 'classnames';
import Track from './Track';
import Thumb from './Thumb';

import { prefix } from '../../config';

const DRAG_THROTTLE_TIME = 5;
const DRAG_EVENT_TYPES = new Set(['mousemove', 'touchmove']);
const DRAG_STOP_EVENT_TYPES = new Set(['mouseup', 'touchend', 'touchcancel']);

export interface SliderProps {
  /** Aria Label for the input */
  ariaLabel?: string; 

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

  const throttle = (callback: () => void, interval: number) => {
    let enableFlag = true;
    return function(...args: any[]) {
      if (!enableFlag) return;
      enableFlag = false;
      callback.apply(this, args);
      setTimeout(() => enableFlag = true, interval);
    }
  }

  const [hovered, setHovered] = React.useState(false);
  const [thumb_percent, set_thumb_percent] = React.useState(0.0);
  const [thumb_x_offset, set_thumb_x_offset] = React.useState(0);

  const [hold, set_hold] = React.useState(false);

  const thumb_pos_ref = React.useCallback(node => {
    if (node !== null) {
    }
  }, []);
  // const track_ref = React.useCallback(node => {
  // }, []);

  const track_ref = React.useRef<HTMLDivElement>();

  const onDragStop = (e: React.MouseEvent<HTMLDivElement>) => {
    let track_bounding_rect = track_ref?.current?.getBoundingClientRect();
    if (track_bounding_rect) {
      // console.log(e.type);
      if (e.type == 'mousemove') {
        let max_width = track_bounding_rect?.width;
        // console.log(e.clientX);
        set_thumb_percent((e.clientX - track_bounding_rect?.left)/track_bounding_rect?.width);
        set_thumb_x_offset((e.clientX - track_bounding_rect?.left));
      } else if (e.type == 'touchmove') {
        set_thumb_percent((e.touches[0].clientX - track_bounding_rect?.left)/track_bounding_rect?.width);
        set_thumb_x_offset((e.touches[0].clientX - track_bounding_rect?.left));
      }
    }
  }
  const throttled_onDragStop = throttle(onDragStop, DRAG_THROTTLE_TIME);

  const onDragStart = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled) return;
    set_hold(true);
    onDragStop(e);
  }
  const onMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
    set_hold(false);
  }

  React.useEffect(() => {
    if (hold) {
      DRAG_EVENT_TYPES.forEach((evt) => {
        document.addEventListener(evt, throttled_onDragStop);
      })
      DRAG_STOP_EVENT_TYPES.forEach((evt) => {
        document.addEventListener(evt, onMouseUp);
      })
    } 
    return () => {
      DRAG_EVENT_TYPES.forEach((evt) => {
        document.removeEventListener(evt, throttled_onDragStop);
      })
      DRAG_STOP_EVENT_TYPES.forEach((evt) => {
      })
    }
  }, [hold])

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
        filled={0}
        offset={0}
        size={size}
        min={min}
        max={max}
        onMouseEnter={showLabelOnHover ? () => setHovered(true) : undefined}
        onMouseLeave={showLabelOnHover ? () => setHovered(true) : undefined}
        onMouseDown={onDragStart}
        onTouchMove={onDragStart}
        // onClick={onClickHandler}
        disabled={disabled}
        ref={track_ref}
      >
        <Thumb 
          x_offset={thumb_x_offset}
          ref={thumb_pos_ref} 
        />
      </Track>
    </div>
  )
});

// Slider.displayName = '@aphotic/slider';
export default Slider;


