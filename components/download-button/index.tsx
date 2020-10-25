import { memo, useCallback } from 'react';
import { Button, message } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import cx from 'classnames';

const PREFIX_CLASS = 'download-button';

function DownloadButton({
  className,
  fileUrl,
  downloadText,
}: {
  className?: string,
  fileUrl: string,
  downloadText: string,
}) {
  const _handleDownloadPdfFile = useCallback(() => {
    message.info('Start to download!', 3)
    const a = document.createElement("a");
    a.href = fileUrl;
    a.download = 'download.pdf';
    a.click();
  }, [fileUrl])

  return (
    <Button
      className={cx(PREFIX_CLASS, className)}
      onClick={_handleDownloadPdfFile}
      type="primary"
      shape="round"
      icon={<DownloadOutlined />}
    >
        {downloadText}
    </Button>
  );
}

export default memo(DownloadButton);
