import { Story, Meta } from '@storybook/react';
import React from 'react';

import Signup from '../../pages/signup';

export default {
  title: 'Pages/Signup',
  component: Signup,
} as Meta<typeof Signup>;

const Template: Story = (args) => <Signup {...args} />;

export const Default = Template.bind({});
