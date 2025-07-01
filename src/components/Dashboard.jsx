import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { useRealTimeData } from '../hooks/useRealTimeData';
import Header from './Header';
import RealTimeTicker from './RealTimeTicker';
import Sidebar from './Sidebar';
import TradingChart from './TradingChart';

const Dashboard = () => {
  const { theme } = useTheme();
  const realTimeData = useRealTimeData(); // Fetch data once here

  return (
    <div className={`dashboard ${theme}`}>
      <Header />
      <div className="ticker-container">
        <RealTimeTicker data={realTimeData} />
      </div>
      <Sidebar data={realTimeData} />
      <main className="main-content">
        <TradingChart />
      </main>
    </div>
  );
};

export default Dashboard;