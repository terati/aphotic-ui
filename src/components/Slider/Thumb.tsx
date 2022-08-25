import * as React from 'react';
import classNames from 'classnames';
import { prefix } from '../../config';

const Thumb = React.forwardRef<HTMLDivElement>((props, ref) => {
  const {
    x_offset,
  } = props; 
  const ThumbClass = classNames({
    [`${prefix}--slider--thumb`]: true,
  });

  return (
    <div 
      style={{ left: x_offset }}
      className={ThumbClass}
      ref={ref}
    >
      {/* Thumb Circle */}
    </div>
  )
})

export default Thumb