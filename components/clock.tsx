import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import cx from "classnames";
import "./style.styl";

const useClock = () => {
  return useSelector(
    (state: any) => ({
      lastUpdate: state.lastUpdate,
      light: state.light
    }),
    shallowEqual
  );
};

const formatTime = (time: any) => {
  // cut off except hh:mm:ss
  return new Date(time).toJSON().slice(11, 19);
};

const Clock = () => {
  const { lastUpdate, light } = useClock();
  return (
    <div className={cx("clock", { light: light })}>
      {formatTime(lastUpdate)}
    </div>
  );
};

export default Clock;
