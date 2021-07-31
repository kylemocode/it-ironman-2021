import React, { useState, useEffect } from 'react';
import './App.css';
import SimpleVirtualizedList from './SimpleVirtualizedList';

const ITEM_COUNT = 2000;

function App() {
  const [items, setItems] = useState<{ index: number; name: string }[]>([]);

  useEffect(() => {
    setItems(
      new Array(ITEM_COUNT)
        .fill(null)
        .map((_, i) => ({ index: i, name: `Item ${i}` }))
    );
  }, []);

  return (
    <div className='App'>
      <SimpleVirtualizedList
        itemCount={items.length}
        itemHeight={40}
        windowHeight={400}
        renderItem={({ index, style }) => {
          const i = items[index];
          return (
            <div key={i.name} className='item' style={style}>
              <label>{i.name}</label>
            </div>
          );
        }}
      />
    </div>
  );
}

export default App;
