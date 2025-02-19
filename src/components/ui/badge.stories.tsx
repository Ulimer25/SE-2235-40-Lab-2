import { Badge } from './badge';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    variant: {
      control: 'select',
      description: 'Badge variants',
      options: ['default', 'secondary', 'destructive', 'outline']
    },
    children: {
      control: 'text',
      description: 'Content to be displayed inside the badge'
    },
    className: {
      control: 'text',
      description: 'Custom tailwind CSS classes to apply to the badge'
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
    children: 'Default Badge',
    className: 'shadow-sm'
  }
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Badge',
    className: 'shadow-sm'
  }
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Destructive Badge',
    className: 'shadow-sm'
  }
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline Badge',
    className: 'shadow-sm'
  }
};

export const DefaultWithLongText: Story = {
  args: {
    variant: 'default',
    children: 'Default Badge with a little bit longer text',
    className: 'shadow-sm'
  }
};

export const SecondaryWithIcon: Story = {
  args: {
    variant: 'secondary',
    children: (
      <>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='mr-1 inline h-4 w-4'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M12 4.5v15m7.5-15V4.5m0 0h-15m15 0l-3.75 6 3.75-6'
          />
        </svg>
        Secondary with Icon
      </>
    ),
    className: 'shadow-sm'
  }
};
