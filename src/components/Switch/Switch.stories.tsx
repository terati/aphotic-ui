import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Switch } from '.';

export default {
  title: 'Components/Switch',
  component: Switch,
  argTypes: {
  
  },
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Switch',
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
