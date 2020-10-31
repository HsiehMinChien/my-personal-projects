import { memo } from 'react';
import ContentContainer from '../../components/content-container';

function Home() {
  return (
    <ContentContainer className="home">
      <h1>I'm Min Chien Hsieh</h1>
    </ContentContainer>
  );
}

export default memo(Home);
