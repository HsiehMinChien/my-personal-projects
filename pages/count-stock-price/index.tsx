import { useState } from "react";
import cx from "classnames";
import ReactCalander from "react-calendar";
import { InputNumber, Input } from "antd";
import Moment from "moment";
import Big from "big.js";
import "./style.styl";

const PREFIX_CLASS = "count-stock-price-page";

export default function CountStockPrice() {
  const [stockName, setStockName] = useState("");
  const [money, onChangeMomey] = useState(0);
  const [rate, onChangeRage] = useState(0);
  const [value, onChangeDate] = useState([new Date(), new Date()]);
  const [startDate, endDate] = value;

  function _handleOnChangeDate(date: Date | Date[]) {
    onChangeDate(date as any);
  }

  function _handleOnChangeMomey(value: any) {
    onChangeMomey(value);
  }

  function _handleOnChangeRate(value: any) {
    onChangeRage(value);
  }

  return (
    <div className={PREFIX_CLASS}>
      <h1 className="page-title">股票月曆表</h1>
      <div className="basic-input">
        <div>
          <label className="stock-name" htmlFor="stock-name">股票名稱:</label>
          <Input id="stock-name" size="large" onChange={(e) => setStockName(e.target.value)} />
        </div>
        <div>
          <label className="stock-start-price" htmlFor="stock-start-price">起始股價:</label>
          <InputNumber
            id="stock-start-price"
            size="large"
            onChange={_handleOnChangeMomey}
            value={money}
            min={0}
          />
        </div>
        <div>
          <label className="rate" htmlFor="rate">漲跌率(%):</label>
          <InputNumber
            id="rate"
            size="large"
            onChange={_handleOnChangeRate}
            value={rate}
            min={-10}
            max={10}
          />
        </div>
        <p className="notice">請選擇下方的月曆，選定開始跟結束日期後會自動算出漲跌價格</p>
      </div>
      <h1 className={cx('stock-name', { isRise: rate > 0 }, { isDown: rate < 0 })}>
        {`股票名稱: ${stockName}`}
      </h1>
      <ReactCalander
        selectRange
        onChange={_handleOnChangeDate}
        value={value}
        tileContent={(args: any) => {
          const { date } = args;

          if (inSelectedRegion(date, startDate, endDate)) {
            const range = getRange(date, startDate);
            const totalRate = new Big(100 + rate || 0).div(100).pow(range);
            const currentMomey = new Big(money || 0).times(totalRate);

            if (isTranstionDay(date)) {
              return (
                <div>
                  <div
                    className={cx({ isRise: rate > 0 }, { isDown: rate < 0 })}
                  >
                    股價:{currentMomey.toFixed(2)}元
                  </div>
                </div>
              );
            }
            return <div>沒開市</div>;
          }
          return (
            <div>
              <div>股價:0.00元</div>
            </div>
          );
        }}
      />
      <div className="calender-notice">本試算表僅供參考，實際金額以股市為準。</div>
    </div>
  );
}

function inSelectedRegion(date: Date, startDate: Date, endDate: Date) {
  return (
    date.getTime() >= startDate.getTime() &&
    date.getTime() <= endDate.getTime()
  );
}

function isTranstionDay(date: Date) {
  return Moment(date).weekday() !== 0 && Moment(date).weekday() !== 6
}

function getRange(endDate: Date, startDate: Date) {
  const endDateMoment = Moment(endDate || Date());
  const startDateMoment = Moment(startDate || Date());
  const diffOfWeek = endDateMoment.week() - startDateMoment.week();
  const endDay = endDateMoment.weekday() < 6 ? endDateMoment.weekday() : 5;
  const startDay =
    startDateMoment.weekday() < 6 ? startDateMoment.weekday() : 5;
  let offsetDay = 0;

  if (
    endDateMoment.weekday() > 0 &&
    endDateMoment.weekday() < 6 &&
    startDateMoment.weekday() > 0 &&
    startDateMoment.weekday() < 6
  ) {
    offsetDay = 1;
  }

  return diffOfWeek * 5 + endDay - startDay + offsetDay;
}
