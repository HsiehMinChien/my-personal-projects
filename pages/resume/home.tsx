import { memo } from 'react';
import ContentContainer from '../../components/content-container';

function Home() {
  return (
    <ContentContainer className="home">
      <h1>I'm Min Chien, Hsieh<span>.</span></h1>
      <h2>An frontend engineer</h2>
    </ContentContainer>
  );
}

export default memo(Home);
