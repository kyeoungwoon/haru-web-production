import type { Meta, StoryObj } from '@storybook/nextjs';

import { ImageSize } from '../types/images.common.types';
import DefaultProfileImage from './DefaultProfileImage.client';

const meta: Meta<typeof DefaultProfileImage> = {
  title: 'Components/DefaultProfileImage',
  component: DefaultProfileImage,
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'text',
      defaultValue: '홍길동',
    },
    userId: {
      control: 'text',
      defaultValue: '1n',
    },
    color: {
      control: 'color',
      description: '배경색 직접 지정시 사용',
    },
    size: {
      control: 'radio',
      options: ['small', 'large'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof DefaultProfileImage>;

export const Default: Story = {
  args: {
    name: '홍길동',
    userId: '1n',
  },
};

export const Small: Story = {
  args: {
    name: '김작은',
    userId: '2n',
    size: ImageSize.SMALL,
  },
};

export const WithCustomColor: Story = {
  args: {
    name: '김커스텀',
    userId: '1n',
    color: '#FFD700',
  },
};

export const DifferentUsers: Story = {
  render: () => (
    <div className="flex gap-2">
      <DefaultProfileImage name="유저A" userId="1n" />
      <DefaultProfileImage name="유저B" userId="2n" />
      <DefaultProfileImage name="유저C" userId="3n" />
      <DefaultProfileImage name="유저A" userId="4n" />
      <DefaultProfileImage name="유저B" userId="5n" />
      <DefaultProfileImage name="유저C" userId="6n" />
      <DefaultProfileImage name="유저C" userId="7n" />
    </div>
  ),
};
