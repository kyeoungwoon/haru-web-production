import { Meta, StoryObj } from '@storybook/nextjs';

import InputOnboading from '@common/components/inputs/InputOnboarding/InputOnboarding.client';
import {
  OnboardingMode,
  OnboardingState,
  OnboardingType,
} from '@common/components/inputs/InputOnboarding/InputOnboarding.types';

const meta: Meta<typeof InputOnboading> = {
  title: 'Components/inputs/InputOnboarding',
  component: InputOnboading,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof InputOnboading>;

export const Default: Story = {
  args: {
    mode: OnboardingMode.DEFAULT,
    title: '이메일 주소',
    inputValue: 'helloWorld@gmail.com',
    placeholder: '이메일 주소를 입력해주세요',
    onChange: (value) => console.log(value),
    type: OnboardingType.SHOW,
    message: '',
    state: OnboardingState.DEFAULT,
  },
};

export const Editable: Story = {
  args: {
    mode: OnboardingMode.EDITABLE,
    title: '이메일 주소',
    inputValue: 'hello',
    placeholder: '이메일 주소를 입력해주세요',
    onChange: (value) => console.log(value),
    type: OnboardingType.SHOW,
    message: '',
    state: OnboardingState.DEFAULT,
  },
};

export const Error: Story = {
  args: {
    mode: OnboardingMode.DEFAULT,
    title: '이메일 주소',
    inputValue: 'helloWorld@gmail.com',
    placeholder: '이메일 주소를 입력해주세요',
    onChange: (value) => console.log(value),
    type: OnboardingType.SHOW,
    message: '올바른 이메일 형식이 아닙니다.',
    state: OnboardingState.ERROR,
  },
};

export const Approval: Story = {
  args: {
    mode: OnboardingMode.DEFAULT,
    title: '이메일 주소',
    inputValue: 'helloWorld@gmail.com',
    placeholder: '이메일 주소를 입력해주세요',
    onChange: (value) => console.log(value),
    type: OnboardingType.SHOW,
    message: '사용 가능한 이메일 형식입니다.',
    state: OnboardingState.APPROVAL,
  },
};

export const Hide: Story = {
  args: {
    mode: OnboardingMode.DEFAULT,
    title: '이메일 주소',
    inputValue: 'helloWorld@gmail.com',
    placeholder: '이메일 주소를 입력해주세요',
    onChange: (value) => console.log(value),
    type: OnboardingType.HIDE,
    message: '',
    state: OnboardingState.DEFAULT,
  },
};
