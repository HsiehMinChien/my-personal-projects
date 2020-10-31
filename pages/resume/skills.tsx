import { memo } from 'react';
import ContentContainer from '../../components/content-container';

const skillList = [
  'Javascript',
  'Typescript',
  'CSS',
  'HTML',
  'React.js',
  'Redux',
  'Bootstrap',
  'GraphQL',
  'Apollo',
  'Next.js',
  'SASS',
  'style-components',
  'Stylus',
  'Antd(Ant desing)',
  'Nightwatch',
  'Jest',
  'Nest.js',
  'git',
  'source tree',
];

function Skills() {
  return (
    <ContentContainer title="Skills" className="skills">
      {skillList.map((skill, index) => (<div key={skill+index} className="detail">{skill}</div>))}
    </ContentContainer>
  );
}

export default memo(Skills);
