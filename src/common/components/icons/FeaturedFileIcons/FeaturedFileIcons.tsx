import clsx from 'clsx';

import { IconsCommonProps } from '@icons/types/icons.common.types';

import AiManagerFilleIcon from '@svgs/featured-file/AiManagerFilleIcon.svg';
import SnsAssistFileIcon from '@svgs/featured-file/SnsAssistFileIcon.svg';
import TeamMoodFileIcon from '@svgs/featured-file/TeamMoodFileIcon.svg';

import { FeaturedFileIconsState } from './FeaturedFileIcons.types';

const FeaturedFileIcons = ({ state, className }: IconsCommonProps<FeaturedFileIconsState>) => {
  switch (state) {
    case FeaturedFileIconsState.SIZE_24_AI_MANAGER_FILE:
      return <AiManagerFilleIcon className={clsx(className, 'h-[24px] w-[24px]')} />;
    case FeaturedFileIconsState.SIZE_20_AI_MANAGER_FILE:
      return <AiManagerFilleIcon className={clsx(className, 'h-[20px] w-[20px]')} />;
    case FeaturedFileIconsState.SIZE_16_AI_MANAGER_FILE:
      return <AiManagerFilleIcon className={clsx(className, 'h-[16px] w-[16px]')} />;
    case FeaturedFileIconsState.SIZE_24_SNS_ASSISTANT_FILE:
      return <SnsAssistFileIcon className={clsx(className, 'h-[24px] w-[24px]')} />;
    case FeaturedFileIconsState.SIZE_20_SNS_ASSISTANT_FILE:
      return <SnsAssistFileIcon className={clsx(className, 'h-[20px] w-[20px]')} />;
    case FeaturedFileIconsState.SIZE_16_SNS_ASSISTANT_FILE:
      return <SnsAssistFileIcon className={clsx(className, 'h-[16px] w-[16px]')} />;
    case FeaturedFileIconsState.SIZE_24_TEAM_MOOD_FILE:
      return <TeamMoodFileIcon className={clsx(className, 'h-[24px] w-[24px]')} />;
    case FeaturedFileIconsState.SIZE_20_TEAM_MOOD_FILE:
      return <TeamMoodFileIcon className={clsx(className, 'h-[20px] w-[20px]')} />;
    case FeaturedFileIconsState.SIZE_16_TEAM_MOOD_FILE:
      return <TeamMoodFileIcon className={clsx(className, 'h-[16px] w-[16px]')} />;
    default:
      return null;
  }
};

export default FeaturedFileIcons;
