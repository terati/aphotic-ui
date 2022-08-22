import * as React from 'react';
import styled from '@emotion/styled';
import classNames from 'classnames';
import { prefix } from '../../config';

export interface CheckboxProps {
  /**
   * Optional class label
   */
  className?: string;
  /**
   * Checkbox text label
   */
  label?: string;
  /**
   * Disabling Option
   */
  disabled?: boolean;
  /**
   * 
   */
  children?: React.ReactNode;
  /**
   * 
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Optional CSS in JS styling
   */
  styles?: {};

}

const Checkbox = React.forwardRef(({
  className,
  children,
  label = 'checkbox',
  disabled = false,
  size = 'medium',
  styles, 
  ...rest
}:CheckboxProps, ref) => {

  const generalClass = classNames(className, {
    [`${prefix}--checkbox`]: true,
  })

  const labelClass = classNames({
    [`${prefix}--label--checkbox`]: true,
  })

  const RootCheckBox = styled('input') (
    {
      ...styles
    }
  )

  const checkboxNode = (
    <label className={labelClass}> 
      <RootCheckBox
        type="checkbox"
        className={generalClass}
      />
      {label}
    </label>

  )

  return checkboxNode;
})

// Checkbox.displayName = 'Checkbox';
export default Checkbox;
