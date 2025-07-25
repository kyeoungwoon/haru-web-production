import { Suspense } from 'react';

import { SearchParamsType } from '@common/types/routes.types';

import parseEnumQueryParam from '@common/utils/parseEnumQueryParam';

import { LeftTabType } from '@features/ai-meeting-manager/constants/tabs';
import { SnsFileTabType } from '@features/sns-event-assistant/constants/tabs';
import {
  SurveyQuestionTabType,
  TeamMoodReportTabType,
} from '@features/team-mood-tracker/constants/tabs';

import LeftPanel from '@features/ai-meeting-manager/components/panels/LeftPanel/LeftPanel.server';
import RightPanel from '@features/ai-meeting-manager/components/panels/RightPanel/RightPanel.server';
import LeftTab from '@features/ai-meeting-manager/components/tabs/LeftTab/LeftTab.client';
import SnsFilePanel from '@features/sns-event-assistant/components/SnsFilePanel/SnsFilePanel.server';
import SnsFileTab from '@features/sns-event-assistant/components/SnsFileTab/SnsFileTab.client';

import SurveyQuestionPanel from '@features/team-mood-tracker/componets/panels/SurveyQuestionPanel/SurveyQuestionPanel.server';
import TeamMoodReportPanel from '@features/team-mood-tracker/componets/panels/TeamMoodReportPanel/TeamMoodReportPanel.server';
import SurveyQuestionTab from '@features/team-mood-tracker/componets/tabs/SurveyQuestionTab/SurveyQuestionTab.client';
import TeamMoodReportTab from '@features/team-mood-tracker/componets/tabs/TeamMoodReportTab/TeamMoodReportTab.client';

const TestPage = async ({ searchParams }: { searchParams: Promise<SearchParamsType> }) => {
  // // TAB_AI 회의 진행 매니저_좌측
  // const { leftTab } = await searchParams;
  // const formattedLeftTab = parseEnumQueryParam(leftTab, LeftTabType, LeftTabType.MEETING_SUMMARY);

  // // TAB_SNS 이벤트 어시스턴트
  // const { snsFileTab } = await searchParams;
  // const formattedTab = parseEnumQueryParam(
  //   snsFileTab,
  //   SnsFileTabType,
  //   SnsFileTabType.PARTICIPANT_LIST,
  // );
  // // 실제로는 서버에서 count 가져오기
  // const participantCount = 10;
  // const winnerCount = 10;

  // TAB_팀 분위기 트래커
  // 실제로는 서버에서 설문 정보 가져오기
  const survey = {
    isSubmitted: true,
  };

  const { moodTab } = await searchParams;
  const formattedTab = parseEnumQueryParam(
    moodTab,
    TeamMoodReportTabType,
    TeamMoodReportTabType.TEAM_MOOD_REPORT,
  );
  // 실제로는 서버에서 count 가져오기
  const ResponseSummary = 10;

  return (
    // <div className="flex gap-4">
    <div>
      {/* TAB_AI 회의 진행 매니저_좌측 */}
      {/* <div>
        <LeftTab current={formattedLeftTab} />
        <LeftPanel tab={formattedLeftTab} />
      </div>
      <div>
        <RightPanel />
      </div> */}
      {/* TAB_SNS 이벤트 어시스턴트 */}
      {/* <div>
        <SnsFileTab
          current={formattedTab}
          counts={{
            [SnsFileTabType.PARTICIPANT_LIST]: participantCount,
            [SnsFileTabType.WINNER_LIST]: winnerCount,
          }}
        />
        <SnsFilePanel tab={formattedTab} />
      </div> */}
      {/* TAB_팀 분위기 트래커 */}
      <SurveyQuestionTab survey={survey} />
      <SurveyQuestionPanel survey={survey} />
      <div>
        <TeamMoodReportTab
          current={formattedTab}
          counts={{
            [TeamMoodReportTabType.ANSWER_SUMMARY]: ResponseSummary,
          }}
        />
        <TeamMoodReportPanel tab={formattedTab} />
      </div>
    </div>
  );
};
export default TestPage;
