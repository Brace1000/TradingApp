import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useApp } from '../context/AppContext';

const TradingChart = () => {
  const containerRef = useRef(null);
  const widgetRef = useRef(null);
  const { theme } = useTheme();
  const { activeSymbol } = useApp();

  useEffect(() => {
    if (!containerRef.current || !window.TradingView) return;

    // If widget doesn't exist, create it
    if (!widgetRef.current) {
      widgetRef.current = new window.TradingView.widget({
        width: '100%',
        height: '100%',
        symbol: activeSymbol,
        interval: 'D',
        container_id: containerRef.current.id,
        theme: theme,
        style: '1',
        locale: 'en',
        toolbar_bg: theme === 'dark' ? '#1e222d' : '#f1f3f6',
        enable_publishing: false,
        allow_symbol_change: true,
        hide_side_toolbar: false,
      });
    }
  }, []); // Run only once to create the widget

  // Effect to update theme
  useEffect(() => {
    if (widgetRef.current) {
      widgetRef.current.options.theme = theme;
      widgetRef.current.reload();
    }
  }, [theme]);

  // Effect to update symbol
  useEffect(() => {
    if (widgetRef.current) {
      widgetRef.current.options.symbol = activeSymbol;
      widgetRef.current.reload();
    }
  }, [activeSymbol]);

  return (
    <div className="chart-container">
      <div className="card">
        <div 
          id="tradingview-chart-container" 
          ref={containerRef}
          style={{ height: '100%', width: '100%' }}
        />
      </div>
    </div>
  );
};

export default TradingChart;