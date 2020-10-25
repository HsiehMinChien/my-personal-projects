import { useState, useCallback } from 'react';
import { Modal, Switch } from 'antd';
import cx from 'classnames';
import { SettingOutlined } from '@ant-design/icons';
import FixedIcon from '../../components/fixed-icon';
import ContentContainer from '../../components/content-container';
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
        <ContentContainer title="Expreience">
          Experience
        </ContentContainer>
      </div>
      <Modal
        title="Setting"
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