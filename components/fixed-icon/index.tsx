import React from 'react';
import cx from 'classnames';
import './style.styl';

const PREFIX_CLASS = 'fixed-icon';

function FixedIcon({
  className,
  IconComponent,
  onClickIcon,
}: {
  className: string,
  IconComponent: React.ForwardRefExoticComponent<any>,
  onClickIcon: () => void,
}) {
  console.log('FixedIcon')
  return (
    <div className={cx(PREFIX_CLASS, className)}>
      <IconComponent onClick={onClickIcon} />
    </div>
  );
}

const MemoFixedIcon = React.memo(FixedIcon);

export default MemoFixedIcon;
