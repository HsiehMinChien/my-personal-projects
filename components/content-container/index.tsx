import { memo, ReactNode } from 'react';
import cx from 'classnames';
import './style.styl';

const PREFIX_CLASS = 'content-container';

function ContentContainer({
  className,
  title,
  children,
}: {
  className?: string,
  title?: string,
  children?: ReactNode,
}) {
  return (
    <div className={cx(PREFIX_CLASS, className)}>
      <div>
        {title && <h2 className={`${PREFIX_CLASS}__title`}>{title}</h2>}
        <div className={`${PREFIX_CLASS}__content`}>{children}</div>
      </div>
    </div>
  );
}

export default memo(ContentContainer);