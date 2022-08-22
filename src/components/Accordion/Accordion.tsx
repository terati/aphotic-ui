import * as React from 'react';
import styled from '@emotion/styled';
import classNames from 'classnames';

import { prefix } from '../../config';

export interface DropdownProps {
  label?: string;

  className?: string;

  disabled?: boolean;

  children?: React.ReactNode;

  styles?: {};

}

function Dropdown(props: any) {
  return (
    <div>Dropdown</div>
  )
}

export default Dropdown