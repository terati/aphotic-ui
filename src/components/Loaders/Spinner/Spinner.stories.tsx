import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Spinner from './Spinner';

export default {
  title: 'Components/Loaders',
  component: Spinner,
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
    },
    tileColor: {
      control: { type: 'color' },
    },
    pathColor: {
      control: { type: 'color' },
    }
  },

} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = (args) => <Spinner {...args}/>; 

export const SpinnerTemplate = Template.bind({});

