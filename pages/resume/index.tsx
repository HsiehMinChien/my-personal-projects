import { useState, useCallback, memo } from 'react';
import { Modal, Switch } from 'antd';
import cx from 'classnames';
import { SettingOutlined } from '@ant-design/icons';
import FixedIcon from '../../components/fixed-icon';
import Home from './home';
import AboutMe from './about-me';
import ExperienceAndEducation from './experience';
import Skills from './skills';
import Projects from './projects';
import './style.styl';

const PREFIX_CLASS = 'resume';

function Resume() {
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
        <div>
        </div>
      </div>
      <div className={`${PREFIX_CLASS}__right`}>
        <div>
          <Home />
          <AboutMe />
          <ExperienceAndEducation />
          <Skills />
          <Projects />
        </div>
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

export default memo(Resume);
