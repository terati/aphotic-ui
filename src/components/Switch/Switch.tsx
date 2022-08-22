import * as React from 'react';
import styled from '@emotion/styled';
import classNames from 'classnames';

import { prefix } from '../../config';

export type SwitchChangeEventHandler = (
  checked: boolean,
  event: React.MouseEvent<HTMLInputElement>,
) => void;

export type SwitchClickEventHandler = SwitchChangeEventHandler;

export interface SwitchProps {

  /* User provided classnames */
  className: string;

  /* Initial State of switch */
  defaultChecked: boolean;

  checked?: boolean;

  /* Option to disable */
  isDisabled: boolean; 

  /* Optional switch label */
  label?: string;

  onChange?: SwitchChangeEventHandler; 

  onClick?: SwitchClickEventHandler

  size: 'small' | 'medium' | 'large'; 
}


const Switch = React.forwardRef<HTMLButtonElement, SwitchProps> (
  (
    { 
      checked, 
      className = '',
      label, 
      onClick, 
      size = 'medium',
      ...props
    }, ref,
  ) => {
    const SwitchClasses = classNames(className, {
      [`${prefix}--switch`]: true,
    });

    const SpanClasses = classNames(className, {
      [`${prefix}--switch--slider`]: true,
      [`${prefix}--switch--round`]: true,
    })

    const WrapperClass = classNames({
      [`${prefix}--switch--wrapper`]: true,
    })
    const InnerDivClass = classNames({
      [`${prefix}--switch--wrapper--inner--div`]: true,
    })
    const LabelSpanClass = classNames({
      [`${prefix}--switch--label`]: true,
    })

    return (
      <>
        <label className={SwitchClasses}>
            <div className={WrapperClass}>
              <div className={InnerDivClass}>
                <input type="checkbox" checked={checked} onClick={onClick}/>
                <span className={SpanClasses}>  </span>
              </div>
              <div>
                <span className={LabelSpanClass}> {label} </span>
              </div>
              
            </div>
        </label>
      </>
    )

})

export default Switch