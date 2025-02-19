import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent
} from './card';

import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    className: {
      control: 'text',
      description: 'Custom tailwind CSS classes to apply to the card'
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card description goes here.</CardDescription>
        </CardHeader>
        <CardContent>Card content area.</CardContent>
        <CardFooter>Card footer area.</CardFooter>
      </>
    ),
    className: ''
  }
};

export const WithNoDescription: Story = {
  args: {
    children: (
      <>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
        </CardHeader>
        <CardContent>Card content area.</CardContent>
        <CardFooter>Card footer area.</CardFooter>
      </>
    ),
    className: ''
  }
};

export const WithCustomContent: Story = {
  args: {
    children: (
      <>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card description goes here.</CardDescription>
        </CardHeader>
        <CardContent>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </CardContent>
        <CardFooter>Card footer area.</CardFooter>
      </>
    ),
    className: ''
  }
};

export const WithNoFooter: Story = {
  args: {
    children: (
      <>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card description goes here.</CardDescription>
        </CardHeader>
        <CardContent>Card content area.</CardContent>
      </>
    ),
    className: ''
  }
};

export const WithCustomStyling: Story = {
  args: {
    children: (
      <>
        <CardHeader className='bg-gray-100'>
          <CardTitle className='text-xl font-bold'>
            Custom Styled Title
          </CardTitle>
          <CardDescription className='text-gray-500'>
            Custom Styled Description
          </CardDescription>
        </CardHeader>
        <CardContent className='p-8'>
          <p>Custom styled content area.</p>
        </CardContent>
        <CardFooter className='bg-gray-200'>
          <button className='rounded bg-blue-500 px-4 py-2 text-white'>
            Custom Button
          </button>
        </CardFooter>
      </>
    ),
    className: 'border-blue-500 shadow-lg'
  }
};
