import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Checkbox } from '.';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    // backgroundColor: { control: 'color' },
    // loading: { control: 'boolean' },
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  // label: 'Checkbox',
};