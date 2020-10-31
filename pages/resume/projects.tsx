import { memo } from 'react';
import ContentContainer from '../../components/content-container';

const projectInfoList = [
  {
    title: 'GraphQL demo project',
    description: 'Use open GraphQL api to build an demo project.',
    codeUrl: 'https://github.com/HsiehMinChien/graphql-demo-project/',
    demoUrl: 'https://graphql-demo-project.mediocre0528.now.sh/',
  },
  {
    title: 'Mobile website demo with onsenui',
    description: 'Use Onsen UI lib and open pokemon api to build demo project.',
    codeUrl: 'https://github.com/HsiehMinChien/mobile-website-demo-with-onsenui',
    demoUrl: 'https://mobile-website-demo-with-onsenui.mediocre0528.now.sh/',
  },
  {
    title: 'GraphQL Server side demo project with nest.js',
    description: 'Use Nest.js to build an GraphQL server side.',
    codeUrl: 'https://github.com/HsiehMinChien/nestjs-with-graphql',
    demoUrl: 'https://nestjs-demo-project.herokuapp.com/graphql/',
  },
];

function Projects() {
  return (
    <ContentContainer title="Personal side-projects" className="projects">
      {projectInfoList.map((projectInfo, index) => (
        <div key={`${projectInfo.title}${index}`} className="detail">
          <div className="title">{projectInfo.title}</div>
          <div className="description">{`* ${projectInfo.description}`}</div>
          <a className="codeUrl" href={projectInfo.codeUrl} target="_blank">Source Code Link</a>{' / '}
          <a className="demoUrl" href={projectInfo.demoUrl} target="_blank">Online Demo Link</a>
        </div>
      ))}
    </ContentContainer>
  );
}

export default memo(Projects);
