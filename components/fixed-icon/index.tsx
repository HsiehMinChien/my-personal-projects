import { ForwardRefExoticComponent, memo } from 'react';
import cx from 'classnames';
import './style.styl';

const PREFIX_CLASS = 'fixed-icon';

function FixedIcon({
  className,
  IconComponent,
  onClickIcon,
}: {
  className: string,
  IconComponent: ForwardRefExoticComponent<any>,
  onClickIcon: () => void,
}) {
  return (
    <div className={cx(PREFIX_CLASS, className)}>
      <IconComponent onClick={onClickIcon} />
    </div>
  );
}

export default memo(FixedIcon);
