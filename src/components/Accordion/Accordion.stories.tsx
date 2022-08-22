import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Dropdown } from '.';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    // backgroundColor: { control: 'color' },
    // loading: { control: 'boolean' },
  },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Dropdown',
};