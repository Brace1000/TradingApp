import { useState, useEffect } from 'react';
import { subscribeToData } from '../api/mockApi';

export const useRealTimeData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const unsubscribe = subscribeToData((updates) => {
      setData(currentData => {
        // If it's the initial full load
        if (updates.length > 1 && currentData.length === 0) {
          return updates;
        }

        // Apply incremental updates
        const dataMap = new Map(currentData.map(item => [item.symbol, item]));
        updates.forEach(update => {
          dataMap.set(update.symbol, update);
        });

        return Array.from(dataMap.values());
      });
    });

    // Cleanup subscription on component unmount
    return () => unsubscribe();
  }, []);

  return data;
};