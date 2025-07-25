import clsx from 'clsx';

import { IconsCommonProps } from '@icons/types/icons.common.types';

import GoogleLogoIcon from '@svgs/logo/GoogleLogoIcon.svg';
import InstagramLogoIcon from '@svgs/logo/InstagramLogoIcon.svg';

import { ThirdPartyLogoIconsState } from './ThirdPartyLogoIcons.types';

const ThirdPartyLogoIcons = ({ state, className }: IconsCommonProps<ThirdPartyLogoIconsState>) => {
  switch (state) {
    case ThirdPartyLogoIconsState.GOOGLE_DEFAULT:
      return <GoogleLogoIcon className={clsx('h-[20px] w-[20px] text-gray-100', className)} />;
    case ThirdPartyLogoIconsState.INSTAGRAM_DEFAULT:
      return <InstagramLogoIcon className={clsx('h-[20px] w-[20px] text-gray-100', className)} />;
    default:
      return null;
  }
};

export default ThirdPartyLogoIcons;
