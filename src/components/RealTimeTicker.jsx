import React from 'react';

const TickerItem = ({ item }) => {
  const isUp = item.change >= 0;
  const changePercent = (item.change / (item.price - item.change)) * 100;
  
  return (
    <div className="ticker-item">
      <span>{item.symbol.split(':')[1]}</span>
      <span className={`price ${isUp ? 'price-up' : 'price-down'}`}>
        ${item.price.toFixed(2)}
      </span>
      <span className={`change ${isUp ? 'price-up' : 'price-down'}`}>
        ({isUp ? '+' : ''}{changePercent.toFixed(2)}%)
      </span>
    </div>
  );
};

const RealTimeTicker = ({ data }) => {
  // Duplicate data for a seamless loop
  const tickerData = [...data, ...data];

  return (
    <div className="ticker-wrap">
      {tickerData.map((item, index) => (
        <TickerItem key={`${item.symbol}-${index}`} item={item} />
      ))}
    </div>
  );
};

export default RealTimeTicker;