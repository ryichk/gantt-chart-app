import { Story, Meta } from '@storybook/react';
import React from 'react';

import Login from '../../pages/login';

export default {
  title: 'Pages/Login',
  component: Login,
} as Meta<typeof Login>;

const Template: Story = (args) => <Login {...args} />;

export const Default = Template.bind({});
