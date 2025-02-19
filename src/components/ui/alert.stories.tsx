import { Alert, AlertTitle, AlertDescription } from './alert';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    variant: {
      control: 'select',
      description: 'Alert variants',
      options: ['default', 'destructive']
    },
    children: {
      control: 'text',
      description: 'Content of the alert (can be text or other components)'
    },
    className: {
      control: 'text',
      description: 'Custom tailwind CSS classes to apply to the alert'
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
    children: (
      <>
        <AlertTitle>Default Alert Title</AlertTitle>
        <AlertDescription>
          This is a default alert description.
        </AlertDescription>
      </>
    ),
    className: ''
  }
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: (
      <>
        <AlertTitle>Destructive Alert Title</AlertTitle>
        <AlertDescription>
          This is a destructive alert description.
        </AlertDescription>
      </>
    ),
    className: ''
  }
};

export const DefaultNoTitle: Story = {
  args: {
    variant: 'default',
    children: <AlertDescription>This alert has no title.</AlertDescription>,
    className: ''
  }
};

export const DestructiveCustomStyling: Story = {
  args: {
    variant: 'destructive',
    children: (
      <>
        <AlertTitle className='text-lg font-bold'>
          Custom Styled Title
        </AlertTitle>
        <AlertDescription className='text-gray-200'>
          Custom Styled Description
        </AlertDescription>
      </>
    ),
    className: 'bg-red-800 border-red-900'
  }
};
