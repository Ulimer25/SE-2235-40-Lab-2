import { Checkbox } from './checkbox';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Whether the checkbox is checked'
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the checkbox is disabled'
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Unchecked: Story = {
  args: {
    checked: false,
    disabled: false
  }
};

export const Checked: Story = {
  args: {
    checked: true,
    disabled: false
  }
};

export const DisabledUnchecked: Story = {
  args: {
    checked: false,
    disabled: true
  }
};

export const DisabledChecked: Story = {
  args: {
    checked: true,
    disabled: true
  }
};

export const CustomStyling: Story = {
  args: {
    checked: false,
    disabled: false,
    className:
      'border-red-500 focus-visible:ring-2 focus-visible:ring-red-500 data-[state=checked]:bg-red-500'
  }
};
