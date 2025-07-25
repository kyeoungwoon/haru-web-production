'use client';

import clsx from 'clsx';

import { ButtonsCommonProps } from '../../types/buttons.common.types';

/**
 * '초대' 버튼.
 */
const InviteButton = ({ onClick, ...props }: ButtonsCommonProps) => {
  return (
    <button
      className={clsx(
        'text-bt2-sb bg-primary inline-flex h-[32px] w-[46px] items-center justify-center rounded-[6px] px-[11px] py-[8px] whitespace-nowrap text-white',
      )}
      onClick={onClick}
      {...props}
    >
      초대
    </button>
  );
};

export default InviteButton;
