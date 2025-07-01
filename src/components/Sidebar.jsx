import React from 'react';
import { useApp } from '../context/AppContext';

const WatchlistItem = ({ item, isActive, onClick }) => {
  const isUp = item.change >= 0;
  const changePercent = (item.change / (item.price - item.change)) * 100;

  return (
    <div
      className={`watchlist-item ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      <div className="item-info">
        <span className="item-symbol">{item.symbol.split(':')[1]}</span>
        <span className="item-name">{item.name}</span>
      </div>
      <div className="item-market">
        <div className="item-price">${item.price.toFixed(2)}</div>
        <div className={`item-change ${isUp ? 'price-up' : 'price-down'}`}>
          {isUp ? '+' : ''}{changePercent.toFixed(2)}%
        </div>
      </div>
    </div>
  );
};

const Sidebar = ({ data }) => {
  const { activeSymbol, setActiveSymbol } = useApp();
  
  return (
    <aside className="sidebar">
      <h2>Watchlist</h2>
      {data.map(item => (
        <WatchlistItem
          key={item.symbol}
          item={item}
          isActive={item.symbol === activeSymbol}
          onClick={() => setActiveSymbol(item.symbol)}
        />
      ))}
    </aside>
  );
};

export default Sidebar;