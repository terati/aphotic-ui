import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Slider } from '.';

export default {
  title: 'Components/Slider',
  component: Slider,
  argTypes: {
    
  }
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = (args) => <Slider {...args} />;

export const Primary = Template.bind({});


Primary.args = {
  // label: 'Slider',
};