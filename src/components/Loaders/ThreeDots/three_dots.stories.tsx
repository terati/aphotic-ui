import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThreeDotsLoader } from './three_dots';

export default {
  title: 'Components/Loaders',
  component: ThreeDotsLoader,
  argTypes: {
    // backgroundColor: { control: 'color' },
    blink: { control: 'string' },
    fill: { control: 'color' },
    speed: { control: 'number' },
  },
} as ComponentMeta<typeof ThreeDotsLoader>;

const Template: ComponentStory<typeof ThreeDotsLoader> = (args) => <ThreeDotsLoader {...args} />;

export const ThreeDots = Template.bind({});
ThreeDots.args = {
  type: "blink",
  fill: 'red',
  speed: 20,
};

