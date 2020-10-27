import { memo } from 'react';
import { Timeline } from 'antd';
import ContentContainer from '../../components/content-container';

function ExperienceAndEducation() {
  return (
    <ContentContainer title="Experience & Education" className="experience">
      <Timeline mode="left">
        <Timeline.Item>Aug 2019 - currently, ljit tech corp - Frontend Developr</Timeline.Item>
        <Timeline.Item>Sep 2018 - June 2019, PressLogic - Frontend Developr</Timeline.Item>
        <Timeline.Item>June 2014 - Feb 2017, Quanta - BIOS Engineer</Timeline.Item>
        <Timeline.Item color="green"> Sep 2010 - Sep 2012, NTU GIPO - Master degree</Timeline.Item>
        <Timeline.Item color="green">Sep 2003 - Sep 2008, NCU Physics - Bachelor degree</Timeline.Item>
      </Timeline>
    </ContentContainer>
  );
}

export default memo(ExperienceAndEducation);
