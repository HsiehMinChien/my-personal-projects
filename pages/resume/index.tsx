import { useState, useCallback } from 'react';
import { Modal, Switch } from 'antd';
import cx from 'classnames';
import { SettingOutlined } from '@ant-design/icons';
import FixedIcon from '../../components/fixed-icon';
import ContentContainer from '../../components/content-container';
import DownloadButton from '../../components/download-button';
import './style.styl';

const PREFIX_CLASS = 'resume';

export default function Resume() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSettingModalVisible, setIsSettingModalVisible] = useState(false);
  const _handleCloseModal = useCallback(() => {
    setIsSettingModalVisible(false);
  }, [])
  const _handleOpenModal = useCallback(() => {
    setIsSettingModalVisible(true);
  }, [])

  return (
    <div className={cx(PREFIX_CLASS, { 'dark-mode': isDarkMode })}>
      <div className={`${PREFIX_CLASS}__left`}>
        <div>left</div>
      </div>
      <div className={`${PREFIX_CLASS}__right`}>
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
        <ContentContainer title="Expreience">
          Experience
        </ContentContainer>
      </div>
      <Modal
        title="Page Setting"
        okText="Close"
        visible={isSettingModalVisible}
        onCancel={_handleCloseModal}
        onOk={_handleCloseModal}
        cancelButtonProps={{ style: { display: 'none' } }}
      >
        <Switch
          checkedChildren="dark mode"
          unCheckedChildren="light mode"
          checked={isDarkMode}
          onChange={value => setIsDarkMode(value)}
        />
      </Modal>
      <FixedIcon
        IconComponent={SettingOutlined}
        className="setting-icon"
        onClickIcon={_handleOpenModal}
      />
    </div>
  );
}