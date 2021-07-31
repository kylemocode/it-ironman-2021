import React, {
  ReactElement,
  CSSProperties,
  useState,
  useMemo,
  useCallback,
  useEffect,
} from 'react';

type RenderCallbackParams = {
  index: number;
  style: CSSProperties;
};

interface IProps {
  itemHeight: number;
  windowHeight: number;
  itemCount: number;
  renderItem: (params: RenderCallbackParams) => ReactElement;
}

const SimpleVirtualizedList: React.FC<IProps> = ({
  itemCount,
  itemHeight,
  renderItem,
  windowHeight,
}) => {
  const [scrollTop, setScrollTop] = useState(0);
  const [items, setItems] = useState<ReactElement[]>([]);

  const innerHeight = useMemo(
    () => itemCount * itemHeight,
    [itemCount, itemHeight]
  );

  const startIndex = Math.floor(scrollTop / itemHeight);

  const endIndex = Math.min(
    itemCount - 1,
    Math.floor((scrollTop + windowHeight) / itemHeight)
  );

  useEffect(() => {
    const itemsList = [];

    for (let i = startIndex; i <= endIndex; i++) {
      itemsList.push(
        renderItem({
          index: i,
          style: {
            position: 'absolute',
            top: `${i * itemHeight}px`,
            width: '100%',
          },
        })
      );
    }
    setItems([...itemsList]);
  }, [endIndex, itemHeight, renderItem, startIndex]);

  const onScroll = useCallback(
    (e: React.UIEvent<HTMLElement>) => setScrollTop(e.currentTarget.scrollTop),
    []
  );

  return (
    <div
      className='scroll'
      style={{ overflowY: 'scroll', height: `${windowHeight}px` }}
      onScroll={onScroll}
    >
      <div
        className='inner'
        style={{ position: 'relative', height: `${innerHeight}px` }}
      >
        {items}
      </div>
    </div>
  );
};

export default SimpleVirtualizedList;
