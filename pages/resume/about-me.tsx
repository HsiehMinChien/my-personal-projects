import { memo } from 'react';
import ContentContainer from '../../components/content-container';
import DownloadButton from '../../components/download-button';

function AboutMe() {
  return (
    <ContentContainer title="About me" className="about-me">
      <div className="personal-photo">
        <img src="https://avatars0.githubusercontent.com/u/32015904?s=400&u=018f30fa634d9c6b16f8cf401c652c73fb55e7e5&v=4"/>
      </div>
      <div className="intrduction">
        <h3>Hello,</h3>
        <div>I am Jeff, an frontend developr from Taiwan. I have two years experience in frontend region. Currently main skill with react.js</div>
        <div className="detail">
          <div>Name: <p>Jeff Hsieh</p></div>
          <div>Location: <p>Taiwan</p></div>
        </div>
        <div className="detail">
          <div>Birthday: <p>05/28/1985</p></div>
          <div>Email: <p>mediocre0528@gmail.com</p></div>
        </div>
        <DownloadButton
          fileUrl="https://raw.githubusercontent.com/HsiehMinChien/hsiehminchien.github.io/f4e501e0220ea76174b82142d69ba3a9d32702ae/Hsieh_Min_Chieh___Resume.pdf"
          downloadText="Download My Resume"
        />
      </div>
    </ContentContainer>
  );
}

export default memo(AboutMe);
