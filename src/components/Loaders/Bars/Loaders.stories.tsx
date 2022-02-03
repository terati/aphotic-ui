import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { BarsLoader } from './bars';

export default {
  title: 'Components/Loaders',
  component: BarsLoader,
  argTypes: {
    // backgroundColor: { control: 'color' },
    fill: { control: 'color' },
    speed: { control: 'number' },
  },
} as ComponentMeta<typeof BarsLoader>;

const Template: ComponentStory<typeof BarsLoader> = (args) => <BarsLoader {...args} />;

export const Bars = Template.bind({});
Bars.args = {
  // label: 'BarsLoader',
  fill: 'red',
  speed: 20,
};

