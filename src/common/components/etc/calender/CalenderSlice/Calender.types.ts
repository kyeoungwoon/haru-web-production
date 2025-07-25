import { DocumentFile } from '../types/calender.common.types';

export interface CalendarSliceProps {
  date: Date; // 해당 날짜
  files?: DocumentFile[]; // 해당 날짜에 첨부된 파일들
  isVisible: boolean; // 글씨 강조 여부
  isToday?: boolean; // 오늘 날짜 강조 여부 -> storybook 때문에 사용
  isSecondRowOrBelow?: boolean; // 두 번째 줄 이상인지 여부 -> storybook 때문에 사용
  isNotLastColumn?: boolean; // 첫 번째 줄인지 여부 -> storybook 때문에 사용
  onFileClick?: (fileId: number) => void; // 파일 클릭 이벤트 핸들러
}
