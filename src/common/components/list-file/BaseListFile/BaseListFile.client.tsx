'use client';

import { useState } from 'react';

import Link from 'next/link';

import clsx from 'clsx';

import CheckboxIcons from '@icons/CheckboxIcons/CheckboxIcons';
import { CheckboxIconsState } from '@icons/CheckboxIcons/CheckboxIcons.types';
import FeaturedFileIcons from '@icons/FeaturedFileIcons/FeaturedFileIcons';

import { BaseListFileProps } from './BaseListFile.types';

const BaseListFile = ({
  id,
  title,
  subtitle,
  href,
  fileIconState,
  isCheckMode = false,
  isChecked = false,
  onCheckToggle,
  rightContent,
  className,
  isSelectable = true,
}: BaseListFileProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    onCheckToggle?.(id);
  };

  const showCheckbox = isSelectable && (isCheckMode || isHovered);

  return (
    <Link
      href={href}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={clsx(
        'w-1030pxr flex items-center justify-between py-4 transition-colors',
        {
          'bg-gray-600': isChecked,
          'hover:bg-gray-600': !isChecked,
        },
        className,
      )}
    >
      <div className="flex items-center">
        <div
          className={clsx('mr-2.5 flex h-9 w-9 flex-shrink-0 items-center justify-center', {
            'cursor-pointer': isSelectable,
          })}
          onClick={isSelectable ? handleToggle : undefined}
        >
          {showCheckbox ? (
            isChecked ? (
              <CheckboxIcons state={CheckboxIconsState.SIZE_24_SQUARE_CHECKBOX_ENABLED} />
            ) : (
              <CheckboxIcons state={CheckboxIconsState.SIZE_24_SQUARE_CHECKBOX_DISABLED} />
            )
          ) : (
            <FeaturedFileIcons state={fileIconState} />
          )}
        </div>

        <div className="gap-y-5pxr flex flex-col">
          <h3 className="text-t5-sb cursor-pointer text-black">{title}</h3>
          <p className="text-cap2-rg text-gray-300">{subtitle}</p>
        </div>
      </div>

      {rightContent && !isCheckMode && <div className="flex items-center">{rightContent}</div>}
    </Link>
  );
};

export default BaseListFile;
