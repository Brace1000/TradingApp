// A list of assets for our watchlist and ticker
const assets = [
    { symbol: 'BINANCE:BTCUSDT', name: 'Bitcoin', price: 68000 },
    { symbol: 'BINANCE:ETHUSDT', name: 'Ethereum', price: 3500 },
    { symbol: 'COINBASE:SOLUSD', name: 'Solana', price: 150 },
    { symbol: 'BINANCE:BNBUSDT', name: 'BNB', price: 600 },
    { symbol: 'BYBIT:XRPUSDT', name: 'XRP', price: 0.52 },
    { symbol: 'KRAKEN:DOGEUSD', name: 'Dogecoin', price: 0.15 },
    { symbol: 'BINANCE:SUIUSDT', name: 'Sui', price: 1.05 },
  ];
  
  // Function to generate a random price update
  const generateUpdate = (asset) => {
    const change = (Math.random() - 0.5) * (asset.price * 0.01);
    const newPrice = asset.price + change;
    return { ...asset, price: newPrice, change, lastUpdate: Date.now() };
  };
  
  // Simulate a real-time feed
  export const subscribeToData = (callback) => {
    const initialData = assets.map(asset => ({
      ...asset,
      change: 0,
      lastUpdate: Date.now()
    }));
  
    // Immediately send the initial data
    callback(initialData);
  
    // Set up an interval to send updates every 1-3 seconds
    const intervalId = setInterval(() => {
      const assetToUpdate = assets[Math.floor(Math.random() * assets.length)];
      const updatedAsset = generateUpdate(assetToUpdate);
      callback([updatedAsset]); // Send updates as an array
    }, 1500 + Math.random() * 1500);
  
    // Return an unsubscribe function to clean up
    return () => clearInterval(intervalId);
  };