import { Input } from './input';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    type: {
      control: 'select',
      description: 'Input type',
      options: ['text', 'email', 'password', 'number', 'tel', 'url']
    },
    placeholder: {
      control: 'text',
      description: 'Input placeholder text'
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled'
    },

    value: {
      control: 'text',
      description: 'Input value'
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'text',
    placeholder: 'Enter text here',
    disabled: false,
    value: ''
  }
};

export const Email: Story = {
  args: {
    type: 'email',
    placeholder: 'Enter your email',
    disabled: false,
    value: ''
  }
};

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Enter your password',
    disabled: false,
    value: ''
  }
};

export const Disabled: Story = {
  args: {
    type: 'text',
    placeholder: 'This input is disabled',
    disabled: true,
    value: ''
  }
};

export const Number: Story = {
  args: {
    type: 'number',
    placeholder: 'Enter a number',
    disabled: false,
    value: ''
  }
};
